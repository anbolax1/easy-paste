import styles from '../styles/Home.module.css';
import PasteList from "../components/Paste/PasteList";
import {NextPageContext} from "next";
import {getPastes} from "../functions/getData";

const Home = ({pastes}) => {
    return (
        <div className={styles.container}>
            <h1>Добро пожаловать на главную страницу!</h1>
            <PasteList title='Все пасты' pastes={pastes}/>
        </div>

    );
};

export default Home;

export interface MainPageContext extends NextPageContext {
    query: {
        page: any,
        q: any
    }
}
export async function getServerSideProps(context: MainPageContext) {
    let query = context.query;
    let headers = {};
    // headers['Authorization'] = `Bearer ${token}`;
    let pastes = await getPastes('pastes', 'get', headers)

    return {
        props: {
            pastes: pastes
        }
    }
}