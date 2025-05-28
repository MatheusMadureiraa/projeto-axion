'use client';

import styles from '../styles/header.module.css'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../contexts/authContext';

const Header = () => {
  const pathname = usePathname();
  const { isAuthenticated, isLoading } = useAuth();

  // não mostra o header em páginas de forms
  if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
      return null;
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={"/"}>
          <img src="/assets/logo.png" alt="Logo" className={styles.logo} />
        </Link>

        <nav className={styles.linksContainer}>
          {/* se estiver logado mostra os links abaixo*/}
          {isAuthenticated && !isLoading ? (
            <>
              <Link href="/foods" className={pathname === "/foods" ? styles.activeLink : styles.link}>FOODS</Link>
              <Link href="/people" className={pathname === "/people" ? styles.activeLink : styles.link}>PEOPLE</Link>
              <Link href="/places" className={pathname === "/places" ? styles.activeLink : styles.link}>PLACES</Link>

            </>

          ) : (
            <>
              {/* se nao, mostra essa msg*/}
              <p>Você precisa estar logado para acessar essa página. Clique na logo para ser redirecionado</p>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;