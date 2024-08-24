import styles from '../../styles/Navbar/Logo.module.css';

const Logo = () => {
    return (
        <>
            <img src='logo.png' alt='Логотип'/>
            <span className={styles.span}>EASY PASTE</span>
        </>
    );
}

export default Logo;