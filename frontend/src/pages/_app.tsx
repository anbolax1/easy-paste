import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <>
            <Navbar isAuthenticated={isAuthenticated} />
            <Component {...pageProps} setIsAuthenticated={setIsAuthenticated} />
        </>
    );
}

export default MyApp;