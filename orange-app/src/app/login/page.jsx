import LoginForm from '../../components/LoginForm';
import styles from '../../styles/loginRegister.module.css'

function LoginPage() {
  return (
    <main>
        <div className={styles.page}>
          <div className={styles.formWrapper}>
              <LoginForm />
          </div>
          <div className={styles.imageContainer}>
          </div>
        </div>
    </main>
  );
}


export default LoginPage;
