import styles from '../styles/Home.module.css';
import PasteList from "../components/Paste/PasteList";
import {useAuth} from "../contexts/AuthContext";
import usePastes from "../hooks/usePastes";

const Home = ({}) => {
    const { isAuth } = useAuth();
    const { pastes, userPastes } = usePastes();


    return (
        <div className={styles.container}>
            <h1>{isAuth ? 'Добро пожаловать!' : 'Пожалуйста, войдите'}</h1>
            <PasteList title='Все пасты' pastes={pastes}/>
            {userPastes.length > 0 && <PasteList title='Мои пасты' pastes={userPastes}/>}
        </div>

    );
};

export default Home;

