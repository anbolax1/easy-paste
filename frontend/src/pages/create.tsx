import styles from '../styles/CreatePaste/Create.module.css';
import CreatePasteForm from "../components/CreatePasteForm/CreatePasteForm";
import axios from "axios";

const CreatePaste = () => {
    const handlePasteCreate = async ({ title, content, expiresAt, visibility, language }) => {
       /* try {
            const response = await axios.post('/api/paste', { title, content, expiresAt, visibility, language });
        } catch (error) {
            console.error('Ошибка авторизации:', error);
        }*/
    };
    return (
        <div className={styles.container}>
            <h1>Создать пасту</h1>
            <CreatePasteForm onSubmit={handlePasteCreate} buttonText='Создать пасту'/>
        </div>
    );
};

export default CreatePaste;