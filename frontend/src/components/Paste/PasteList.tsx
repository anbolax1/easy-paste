import React from 'react';
import PasteItem from './PasteItem';
import styles from '../../styles/Paste/PasteList.module.css';

const PasteList = ({title, pastes}) => {
    return (
        <div className={styles.block}>
            <p className={styles.title}>{title}</p>
            <div className={styles.items}>
                <PasteItem key='caupkqjg'
                           title='Paste OnePaste OnePaste OnePaste OnePaste OnePaste OnePaste OnePaste OnePaste OnePaste OnePaste OnePaste OnePaste OnePaste OnePaste One'
                           content='Paste one contentPaste one contentPaste one contentPaste one contentPaste one contentPaste one contentPaste one contentPaste one contentPaste one contentPaste one contentPaste one contentPaste one contentPaste one contentPaste one contentPaste one content'
                           language='PHP'
                           hash='caupkqjg'
                />
                <PasteItem key='caupkqjg'
                           title='Paste One'
                           content='Paste one content'
                           language='PHP'
                           hash='caupkqjg'
                />
                <PasteItem key='caupkqjg'
                           title='Paste One'
                           content='Paste one content'
                           language='PHP'
                           hash='caupkqjg'
                />
                <PasteItem key='caupkqjg'
                           title='Paste One'
                           content='Paste one content'
                           language='PHP'
                           hash='caupkqjg'
                />
                <PasteItem key='caupkqjg'
                           title='Paste One'
                           content='Paste one content'
                           language='PHP'
                           hash='caupkqjg'
                />
                <PasteItem key='caupkqjg'
                           title='Paste One'
                           content='Paste one content'
                           language='PHP'
                           hash='caupkqjg'
                />
                <PasteItem key='caupkqjg'
                           title='Paste One'
                           content='Paste one content'
                           language='PHP'
                           hash='caupkqjg'
                />
                {/*{pastes.map((record) => (
                <PasteItem
                    key={record.hash}
                    title={record.title}
                    content={record.content}
                    language={record.language}
                    hash={record.hash}
                />
            ))}*/}
            </div>
        </div>

    );
};

export default PasteList;