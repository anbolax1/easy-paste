import { useState } from 'react';
import axios from 'axios';
import AuthForm from "../components/AuthForm";


const Login = ({ setIsAuthenticated }) => {

    const handleLogin = async ({ login, password }) => {
        try {
            const response = await axios.post('/api/login', { login, password });
            if (response.data.success) {
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error('Ошибка авторизации:', error);
        }
    };

    return (
        <AuthForm onSubmit={handleLogin} buttonText='Войти'/>
    );
};

export default Login;