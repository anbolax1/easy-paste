import PasteItemView from "../components/Paste/PasteItemView";

const PasteView = () => {

    const pasteData = {
        title: "Пример пасты",
        content: 'SELECT * FROM `pastes`\n',

        expiresAt: "2024-08-26 06:31",
        visibility: "Публичная",
        language: "JavaScript"
    };

    return (
        <div>
            <PasteItemView
                title={pasteData.title}
                content={pasteData.content}
                expiresAt={pasteData.expiresAt}
                visibility={pasteData.visibility}
                language={pasteData.language}
            />
        </div>
    );
};

export default PasteView;
