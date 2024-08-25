import styles from '../styles/Home.module.css';
import PasteList from "../components/Paste/PasteList";

const Home = () => {
    return (
        <div className={styles.container}>
            <h1>Добро пожаловать на главную страницу!</h1>
            <PasteList title='Все пасты'/>
        </div>

    );
};

export default Home;