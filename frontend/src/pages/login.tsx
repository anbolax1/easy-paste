import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Login.module.css';


const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { email, password });
            if (response.data.success) {
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error('Ошибка авторизации:', error);
        }
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" required />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default Login;