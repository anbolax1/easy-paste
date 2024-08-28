import styles from '../../styles/Navbar/Navbar.module.css';
import NavItem from "./NavItem";
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
    const { isAuth } = useAuth();

    // const myPastesUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/my-pastes`;
    const createPasteUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/create`;
    const loginUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/login`;
    const registerUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/register`;
    const logoutUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/logout`;

    return (
        <nav className={styles.nav}>
            <ul>
                <NavItem href="/">Главная</NavItem>
                <NavItem href={createPasteUrl}>Создать пасту</NavItem>
                {/*{isAuth && <NavItem href={myPastesUrl}>Мои пасты</NavItem>}*/}
            </ul>
            <ul className={styles.authMenu}>
                {!isAuth ? (
                    <>
                        <NavItem href={loginUrl}>Логин</NavItem>
                        <NavItem href={registerUrl}>Регистрация</NavItem>
                    </>
                ) : (
                    <NavItem href={logoutUrl}>Выйти</NavItem>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;