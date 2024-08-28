import axios from 'axios';
import AuthForm from "../components/AuthForm";
import {useState} from "react";
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { logIn } = useAuth();

    const handleLogin = async ({ login, password }) => {
        setErrorMessage('');
        try {
            const response = await axios.post('http://localhost/api/login', { login, password });

            if(response.data.token) {
                logIn(response.data.token);
            }
            window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}`;
        } catch (error) {
            setErrorMessage(`${error.response.data.error}`);
            console.error(error.response.data.error);
        }
    };

    return (
        <AuthForm onSubmit={handleLogin} buttonText='Войти' errorMessage={errorMessage}/>
    );
};

export default Login;