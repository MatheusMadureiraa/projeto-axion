'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState(false);

  const router = useRouter();

  // se ja tiver token e user no localStorage
  // ele ja carrega e nao precisa fazer login
  useEffect(() => {
    const storedToken = localStorage.getItem('strapiToken');
    const storedUser = localStorage.getItem('strapiUser');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (identifier, password) => {
    setIsActionLoading(true);
    setError(null);

    try {
      // demorei MUITOOOO pra descobrir q n usa '/api' na versao antiga do Strapi
      const response = await fetch(`${STRAPI_URL}/auth/local`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error?.message || 'Falha no login');
      }
      if (data.jwt && data.user) {
        setToken(data.jwt);
        setUser(data.user);
        localStorage.setItem('strapiToken', data.jwt);
        localStorage.setItem('strapiUser', JSON.stringify(data.user));
        router.push('/foods'); // redireciona para /foods após login
      } else {
        throw new Error('Resposta inválida do servidor');
      }

    } catch (err) {
      setError(err.message);

    } finally {
      setIsActionLoading(false); // Finaliza carregamento da AÇÃO
    }

  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('strapiToken');
    localStorage.removeItem('strapiUser');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{
        user, token, isAuthenticated: !!token, isLoading, isActionLoading, 
        login, logout, error, clearError: () => setError(null)
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('tem q colocar o AuthProvider em volta do componente que usa useAuth');
  }
  return context;
};