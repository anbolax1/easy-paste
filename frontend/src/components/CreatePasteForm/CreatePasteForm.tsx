import styles from "../../styles/CreatePaste/CreatePasteForm.module.css";
import {useState} from "react";
import Select from 'react-select'
import CodeInput from "./PasteContentInput";

interface OptionType {
    value: string,
    label: string
}
const CreatePasteForm = ({onSubmit, buttonText}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [expiresAt, setExpiresAtOption] = useState({ value: 'unlimited', label: 'Бессрочно' });
    const [visibility, setVisibilityOption] = useState({ value: 'public', label: 'Публичная' });
    const [language, setLanguage] = useState('');

    const expiresAtOptions: OptionType[] = [
        { value: '10m', label: '10 минут' },
        { value: '1h', label: '1 час' },
        { value: '3h', label: '3 часа' },
        { value: '1d', label: '1 день' },
        { value: '1w', label: '1 неделя' },
        { value: '1m', label: '1 месяц' },
        { value: 'unlimited', label: 'Бессрочно' }
    ]

    const visibilityOptions: OptionType[] = [
        { value: 'public', label: 'Публичная' },
        { value: 'unlisted', label: 'Доступна только по ссылке' },
        { value: 'private', label: 'Приватная' }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({title, content, expiresAt, visibility, language});
    };

    const handleSelectorExpiresAtChange = (option) => {
        setExpiresAtOption(option);
    };

    const handleSelectorVisibilityChange = (option) => {
        setVisibilityOption(option);
    };

    const handleCodeInputChange = (code, language) => {
        setContent(code);
        setLanguage(language);
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Название"
                    required/>
                <Select
                    value={expiresAt}
                    onChange={handleSelectorExpiresAtChange}
                    options={expiresAtOptions}
                    className={styles.selector}
                    classNamePrefix="react-select"
                    placeholder={<span className={styles.selectorPlaceholder}>Выберите срок действия</span>}
                />
                <Select
                    value={visibility}
                    onChange={handleSelectorVisibilityChange}
                    options={visibilityOptions}
                    className={styles.selector}
                    classNamePrefix="react-select"
                    placeholder={<span className={styles.selectorPlaceholder}>Выберите доступ</span>}
                />
                <input
                    type="text"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    placeholder="Язык программирования"
                    required/>
                <CodeInput
                    onChange={handleCodeInputChange}
                />
                <button type="submit">{buttonText}</button>
            </form>
        </div>
    );
}

export default CreatePasteForm;