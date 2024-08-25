import styles from '../styles/Home.module.css';
import PasteList from "../components/Paste/PasteList";

const Home = () => {
    const pastes = {};
    return (
        <div className={styles.container}>
            <h1>Добро пожаловать на главную страницу!</h1>
            <PasteList title='Все пасты' pastes={pastes}/>
        </div>

    );
};

export default Home;