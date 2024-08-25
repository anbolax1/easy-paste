import { useState } from 'react';
import axios from 'axios';
import AuthForm from "../components/AuthForm";

const Register = () => {

    const handleRegister = async ({ login, password }) => {
        try {
            const response = await axios.post('/api/register', { login, password });
            if (response.data.success) {
                // Дополнительная логика после успешной регистрации
            }
        } catch (error) {
            console.error('Ошибка регистрации:', error);
        }
    };

    return (
        <AuthForm onSubmit={handleRegister} buttonText='Зарегистрироваться'/>
    );
};

export default Register;