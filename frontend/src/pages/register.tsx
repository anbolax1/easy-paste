import AuthForm from "../components/AuthForm";
import axios from "axios";
import {useState} from "react";
import {useAuth} from "../contexts/AuthContext";

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { logIn } = useAuth();

    const handleRegister = async ({ login, password }) => {
        setErrorMessage('');
        try {
            const response = await axios.post('/api/register', { login, password });
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
        <AuthForm onSubmit={handleRegister} buttonText='Зарегистрироваться' errorMessage={errorMessage}/>
    );
};

export default Register;