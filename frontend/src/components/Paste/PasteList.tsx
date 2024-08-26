import React from 'react';
import PasteItem from './PasteItem';
import styles from '../../styles/Paste/PasteList.module.css';

const PasteList = ({title, pastes}) => {
    return (
        <div className={styles.block}>
            <p className={styles.title}>{title}</p>
            <div className={styles.items}>
                {pastes && pastes.map((record) => (
                <PasteItem
                    key={record.hash}
                    title={record.title}
                    content={record.paste_content}
                    language={record.language}
                    hash={record.hash}
                />
            ))}
            </div>
        </div>

    );
};

export default PasteList;