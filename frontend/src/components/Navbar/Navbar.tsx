import Link from 'next/link';
import styles from '../../styles/Navbar/Navbar.module.css';
import {logout} from "../../functions/auth";
import NavItem from "./NavItem";
import Logo from "./Logo";

const Navbar = ({ isAuthenticated }) => {
    let myPastesUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/my-pastes`;
    let createPasteUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/create`;
    let loginUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/login`;
    let registerUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/register`;

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