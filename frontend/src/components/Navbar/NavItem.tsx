import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from '../../styles/Navbar/NavItem.module.css';

const NavItem = ({ href, children, onClick}) => {
    return (
        <li className={styles.li} onClick={onClick}>
            <Link href={href} className={styles.a}>{children}</Link>
        </li>
    );
};

NavItem.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default NavItem;