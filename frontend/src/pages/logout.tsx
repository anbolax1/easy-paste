import { useEffect } from "react";
import { useAuth } from '../contexts/AuthContext';

const Logout = () => {
    const { logout } = useAuth();

    useEffect(() => {
        logout();

    });

    return null;
};

export default Logout;
