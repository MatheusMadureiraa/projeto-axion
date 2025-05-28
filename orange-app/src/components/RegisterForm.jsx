'use client';

import React, { useState } from 'react';
import styles from '../styles/loginRegister.module.css';
import { useRouter } from 'next/navigation';



function RegisterForm() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    // implementar logica igual login
    console.log('Form submitted');
  };

  {/*inicia como falso */}
  const [showPassword,setShowPassword] = useState(false)

  return (
    <form id="Register-form-container" className={styles.form}>
      <img src="/assets/logo.png" alt="Logo" className={styles.logo} />      
      <div id="Register-inputs" className={styles.inputsContainer}>

        <label htmlFor="email" className={styles.label}>Nome</label>
        <div className={styles.inputWrapper}>
          <input id="nome" type="text" required placeholder="Seunome" className={styles.input} />
          <img src="/assets/mail.png" alt="nome" className={styles.icon} />
        </div>
        
        <label htmlFor="email" className={styles.label}>Email</label>
        <div className={styles.inputWrapper}>
          <input id="email" type="email" required placeholder="seuemail@email.com" className={styles.input} />
          <img src="/assets/mail.png" alt="email" className={styles.icon} />
        </div>

        <label htmlFor="password" className={styles.label}>Password</label>
        <div className={styles.inputWrapper}>
          {/* se a const 'showPassword == true', o input vira text*/}
          <input id="password" type={showPassword ? "text" : "password"} required placeholder="Password" className={styles.input} />
          <img src="/assets/lock.png" alt="cadeado" className={styles.icon} />
        </div>

        <div className={styles.showPasswordContainer}>
          {/* ao clicar no button muda o 'valor' de 'showPassword' */}
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

      <a href="mailto:matheusgmadureira@gmail.com" id="Register-help-text" className={styles.help}>
        Problemas para criar a sua conta?
      </a>

      <div id="Register-actions" className={styles.actions}>
        <button type="submit" id="Register-button" className={styles.buttonSend}>Criar conta</button>
        <span className={styles.or}>ou</span>
        <button type="button" id="register-button" className={styles.buttonSignInUp} onClick={() => router.push('/login')}>Já possuo conta</button>
      </div>

      <div className={styles.termsContainer}>
        <a href="http://www.paginaexemplo001.com/" className={styles.terms}>Termos de uso</a>
        <span>•</span>
        <a href="http://www.paginaexemplo002.com/" className={styles.terms}>Política de privacidade</a>
      </div>
    </form>
  );
}

export default RegisterForm;
