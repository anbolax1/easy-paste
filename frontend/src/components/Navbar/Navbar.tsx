import Link from 'next/link';
import styles from '../../styles/Navbar/Navbar.module.css';
import {logout} from "../../functions/auth";
import NavItem from "./NavItem";
import Logo from "./Logo";

const Navbar = ({ isAuthenticated }) => {
    const myPastesUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/my-pastes`;
    const createPasteUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/create`;
    const loginUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/login`;
    const registerUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/register`;

    return (
        <nav className={styles.nav}>
            <ul>
                <NavItem href="/">Главная</NavItem>
                <NavItem href={createPasteUrl}>Создать пасту</NavItem>
                {isAuthenticated && <NavItem href={myPastesUrl}>Мои пасты</NavItem>}
            </ul>
            <ul className={styles.authMenu}>
                {!isAuthenticated ? (
                    <>
                        <NavItem href={loginUrl}>Логин</NavItem>
                        <NavItem href={registerUrl}>Регистрация</NavItem>
                    </>
                ) : (
                    <NavItem href='' onClick={logout}>Выйти</NavItem>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;