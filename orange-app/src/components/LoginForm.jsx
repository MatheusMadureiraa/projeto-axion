'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/loginRegister.module.css';


function LoginForm() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  {/*inicia como falso */}
  const [showPassword,setShowPassword] = useState(false)

  return (
    <form id="login-form-container" className={styles.form}>
      <img src="/assets/logo.png" alt="Logo" className={styles.logo} />

      <div id="login-inputs" className={styles.inputsContainer}>
        
        <label htmlFor="email" className={styles.label}>Email</label>
        <div className={styles.inputWrapper}>
          <input id="email" type="email" required placeholder="seunome@email.com" className={styles.input} />
          <img src="/assets/mail.png" alt="email" className={styles.icon} />
        </div>

        <label htmlFor="password" className={styles.label}>Password</label>
        <div className={styles.inputWrapper}>
          {/* se a const 'showPassword == true', o input vira text*/}
          <input id="password" type={showPassword ? "text" : "password"} required placeholder="Password" className={styles.input} />
          <img src="/assets/lock.png" alt="cadeado" className={styles.icon} />
        </div>

        <div className={styles.showPasswordContainer}>
          {/* ao clicar no button muda o valor de 'showPassword' */}
          <button
            type="button"
            className={`${styles.showPasswordButton} ${showPassword ? styles.active : ''}`}
            onClick={() => setShowPassword(!showPassword)}
            aria-label="Alternar visibilidade da senha"
          />
          <span className={styles.showPasswordLabel}>
            {showPassword ? 'Ocultar a senha.' : 'Mostrar a senha.'}
          </span>
        </div>

      </div>

      <a href="mailto:matheusgmadureira@gmail.com" id="login-help-text" className={styles.help}>
        Problemas para acessar sua conta?
      </a>

      <div id="login-actions" className={styles.actions}>
        <button type="submit" id="login-button" className={styles.buttonSend}>Acessar</button>
        <span className={styles.or}>ou</span>
        <button type="button" id="register-button" className={styles.buttonSignInUp} onClick={() => router.push('/register')}>Cadastrar</button>
      </div>

      <div className={styles.termsContainer}>
        <a href="http://www.paginaexemplo001.com/" className={styles.terms}>Termos de uso</a>
        <span>•</span>
        <a href="http://www.paginaexemplo002.com/" className={styles.terms}>Política de privacidade</a>
      </div>
    </form>
  );
}

export default LoginForm;
