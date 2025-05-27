import RegisterForm from '../../components/RegisterForm';
import styles from '../../styles/loginRegister.module.css'

function RegisterPage() {
    return (
        <main>
            <div className={styles.page}>
                <div className={styles.formWrapper}>
                    <RegisterForm />
                </div>
                <div className={styles.imageContainer}>
                </div>
            </div>
        </main>
    )
}

export default RegisterPage;