import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext'; // Импортируйте ваш хук useAuth

const usePastes = () => {
    const { isAuth, token } = useAuth();
    const [pastes, setPastes] = useState([]);
    const [userPastes, setUserPastes] = useState([]);

    useEffect(() => {
        const fetchPastes = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/pastes`);
            const data = await res.json();
            setPastes(data);
        };

        fetchPastes();
    }, []);

    useEffect(() => {
        const fetchUserPastes = async () => {
            let headers = {};
            if (token) {
                headers = {
                    'Authorization': `Bearer ${token}`
                };
            }

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/pastes`, { method: 'GET', headers });
            const data = await res.json();
            setUserPastes(data);
        };

        if (token) {
            fetchUserPastes();
        }
    }, [isAuth]);

    return { pastes, userPastes };
};

export default usePastes;
