import React from 'react';
import styles from '../../styles/Paste/PasteItem.module.css';
import Link from "next/link";
import PropTypes from 'prop-types';

const PasteItem = ({ title, content, language, hash }) => {
    const pasteUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${hash}`;
    return (
        <Link href={pasteUrl} className={styles.a}>
            <div className={styles.div}>
                <div className={styles.pasteInfo}>
                    <p className={styles.title}>{title}</p>
                    {language &&
                    <p className={styles.language}>{language}</p>
                    }
                </div>
                <div className={styles.content}>{content}</div>
            </div>
        </Link>
    );
};

export default PasteItem;

PasteItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    language: PropTypes.string,
    hash: PropTypes.string.isRequired,
};