import styles from '../styles/CreatePaste/Create.module.css';
import CreatePasteForm from "../components/CreatePasteForm/CreatePasteForm";
import {useApi} from "../hooks/useApi";
import {useEffect, useState} from "react";

const { api } = useApi();

const CreatePaste = () => {
    const [hash, setHash] = useState(null);

    const handlePasteCreate = async ({ title, content, expiresAt, visibility, language }) => {
        try {
            let headers = {};
            const response = await api('paste', 'post', headers, { title: title, paste_content: content, expires_at: expiresAt.value, visibility: visibility.value, language: language });

            if (response && response.data.hash) {
                setHash(response.data.hash);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (hash) {
            const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${hash}`;
            console.log(url);
            window.location.href = url;
        }
    }, [hash]);
    return (
        <div className={styles.container}>
            <h1>Создать пасту</h1>
            <CreatePasteForm onSubmit={handlePasteCreate} buttonText='Создать пасту'/>
        </div>
    );
};

export default CreatePaste;