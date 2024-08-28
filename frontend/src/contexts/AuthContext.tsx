import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            setIsAuth(true);
        }
    }, []);

    useEffect(() => {
        if (token) {
            const timer = setTimeout(() => {
                logout();
            }, 3600000); // 1 час в миллисекундах

            return () => clearTimeout(timer);
        }
    }, [token]);

    const logIn = (newToken) => {
        setToken(newToken);
        sessionStorage.setItem('token', newToken);
        setIsAuth(true);
    };

    const logout = () => {
        setToken(null);
        sessionStorage.removeItem('token');
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuth, token, logIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
