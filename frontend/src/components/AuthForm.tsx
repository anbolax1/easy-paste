import styles from "../styles/AuthForm.module.css";
import {useState} from "react";

const AuthForm = ({onSubmit, buttonText, errorMessage}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        onSubmit({login, password});
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        // Проверка длины пароля
        if (value.length < 3) {
            setError('Пароль должен содержать не менее 3 символов');
        } else {
            setError('');
        }
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="Логин"
                    required/>
                <input
                    type="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Пароль"
                    required/>
                <button type="submit">{buttonText}</button>
                {error && <span style={{ color: 'red' }}>{error}</span>}
                {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
            </form>
        </div>
    );
}

export default AuthForm;