'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/authContext';
import OrderList from '@/components/OrderList';
import styles from '@/styles/lists.module.css';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

const ProtectedListPage = ({ endpoint, pageTitle, itemTypeName = "itens" }) => {
  const { token, logout } = useAuth(); 
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('DEFAULT'); 

  useEffect(() => {
    if (!token) {
      setIsLoading(false); 
      return; 
    }
    
    const fetchItems = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${STRAPI_URL}/${endpoint}`, { 
          headers: { 'Authorization': `Bearer ${token}` },
        });

        if (!response.ok) {
          if (response.status === 401 || response.status === 403) { logout(); }
          const errorData = await response.json();
          throw new Error(errorData.message || `Erro ao buscar ${itemTypeName}`);
        }
        const data = await response.json();
        setItems(data || []); 
      } catch (err) {
        setError(err.message); 
      } finally {
        setIsLoading(false); 
      }
    };

    fetchItems();
  }, [token, logout, endpoint]); 

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  if (isLoading) {
    return <p className={styles.loadingMessage}>A carregar {itemTypeName}...</p>;
  }
  
  if (error) {
    return <div className={styles.errorMessagePage}>Erro ao carregar {itemTypeName}: {error}</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.listContainer}>   
        <div className={styles.titleAndSelectContainer}>

          <h1 className={styles.listTitle}>{pageTitle}</h1>

          {/* SE tiver item, mostra o select */}
          {items.length > 0 && (
            <select 
              value={sortOrder} 
              onChange={handleSortChange} 
              className={styles.sortSelect}
            >
              <option value="DEFAULT">Padrão</option>
              <option value="ASC">Ordem A-Z</option>
              <option value="DESC">Ordem Z-A</option>
            </select>
          )}

        </div>
        <div className={styles.lineAbove}></div>
        
        {/*passa os itens pra ordenar*/}
        <OrderList 
          items={items}
          sortOrder={sortOrder}
          itemTypeName={itemTypeName}
        />
      </div>
      <button onClick={logout} className={styles.logoutButton}>Sair</button>
    </div>
  );
};

export default ProtectedListPage;