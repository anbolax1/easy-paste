import React, {useEffect, useRef, useState} from 'react';
import hljs from "../../libs/highlight";
import 'highlight.js/styles/default.css';
import styles from "../../styles/Paste/PasteItemView.module.css";


const PasteDisplay = ({ title, content, expiresAt, visibility, language }) => {
    const codeRef = useRef(null);
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const countdown = setInterval(() => {
            const now: any = new Date();
            // Преобразуем строку в формат Date
            if(expiresAt) {
                const expirationDate: any = new Date(expiresAt.replace(' ', 'T') + 'Z'); // добавляем Z для UTC
                const difference = expirationDate - now;

                if (difference <= 0) {
                    clearInterval(countdown);
                    setTimeLeft('Время истекло');
                } else {
                    const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
                    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                    setTimeLeft(`${weeks}н ${days}д ${hours}ч ${minutes}м ${seconds}с`);
                }
            } else {
                setTimeLeft('Бессрочно');
            }

        }, 1000);

        return () => clearInterval(countdown); // Очистка интервала при размонтировании
    }, [expiresAt]);

    useEffect(() => {
        if (codeRef.current) {
            codeRef.current.innerHTML = hljs.highlight(content, { language }).value;
        }
    })

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <pre
                ref={codeRef}
                className={styles.content}>{content}</pre>
            <div className={styles.info}>
                <p><strong>Время действия:</strong> {timeLeft}</p>
                <p><strong>Приватность:</strong> {visibility}</p>
                <p><strong>Язык:</strong> {language}</p>
            </div>
        </div>
    );
};

export default PasteDisplay;
