import styles from '../styles/Home.module.css';
import PasteList from "../components/Paste/PasteList";
// import {NextPageContext} from "next";
// import {getPastes} from "../functions/getData";
import {useEffect, useState} from "react";

const Home = ({}) => {
    const [pastes, setPastes] = useState([]);

    useEffect(() => {
        const fetchPastes = async () => {
            const res = await fetch('http://localhost/api/pastes');
            const data = await res.json();
            setPastes(data);
        };

        fetchPastes();
    }, []);
    return (
        <div className={styles.container}>
            <h1>Добро пожаловать на главную страницу!</h1>
            <PasteList title='Все пасты' pastes={pastes}/>
        </div>

    );
};

export default Home;

/*export interface MainPageContext extends NextPageContext {
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
}*/
