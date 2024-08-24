import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Register.module.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/register', { email, password });
            if (response.data.success) {
                // Дополнительная логика после успешной регистрации
            }
        } catch (error) {
            console.error('Ошибка регистрации:', error);
        }
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleRegister}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" required />
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default Register;