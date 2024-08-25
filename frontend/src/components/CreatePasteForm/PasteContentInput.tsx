import { useState, useEffect, useRef } from 'react';
import hljs from '../../libs/highlight';
import 'highlight.js/styles/default.css';

const CodeInputWithHighlight = ({onChange}) => {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('plaintext');
    const codeRef = useRef(null);

    const handleChange = (event) => {
        const value = event.target.value;
        setCode(value);

        // Определение языка
        const detectedLanguage = hljs.highlightAuto(value).language || 'plaintext';
        setLanguage(detectedLanguage);

        // Вызываем коллбек для передачи данных родителю
        onChange(value, detectedLanguage);
    };

    useEffect(() => {
        if (codeRef.current) {
            codeRef.current.innerHTML = hljs.highlight(code, { language }).value;
        }
    }, [code, language]);

    return (
        <div style={{ position: 'relative', marginBottom: '1.5rem', minHeight: '2rem' }}>
        <textarea
          rows={10}
          cols={50}
          value={code}
          onChange={handleChange}
          placeholder="Введите код"
          style={{
              width: '-webkit-fill-available',
              minHeight: '3rem',
              // height: 'calc(100% - 1.5rem)',
              height: '100%',
              resize: 'none',
              position: 'absolute',
              top: 0,
              left: 0,
              padding: '10px',
              margin: 0,
              opacity: 1,
              zIndex: 0,
              borderRadius: '0',
              fontFamily: 'monospace',
              fontSize: '0.84rem',
              lineHeight: '1.5',
              color: 'transparent',
              caretColor: 'black',
              backgroundColor: 'transparent',
              border: 'transparent',
              outline: 'none',
              overflow: 'hidden'
          }}
        />
            <pre
                ref={codeRef}
                style={{
                    minHeight: '3rem',
                    height: '100%',
                    padding: '10px',
                    margin: 0,
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #ccc',
                    borderRadius: 'inherit',
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word',
                    zIndex: -1,
                    position: 'relative',
                    fontFamily: 'monospace',
                    fontSize: '0.84rem',
                    lineHeight: '1.5'
                }}
            />
        </div>
    );
};

export default CodeInputWithHighlight;
