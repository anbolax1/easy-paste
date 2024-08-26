import PasteItemView from "../components/Paste/PasteItemView";
import {getPasteInfo, getPastes} from "../functions/getData";
import {MainPageContext} from "./index";
import {NextPageContext} from "next";

const PasteView = ({paste}) => {

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
                title={paste.title}
                content={paste.paste_content}
                expiresAt={paste.expires_at}
                visibility={paste.visibility}
                language={pasteData.language}
            />
        </div>
    );
};

export default PasteView;

interface PasteViewPageContext extends NextPageContext {
    query: {
        hash: string
    }
}

export async function getServerSideProps(context: PasteViewPageContext) {
    let query = context.query;
    let hash = query.hash;

    let paste = await getPasteInfo(`paste/${hash}`, 'get')

    console.log(paste);
    return {
        props: {
            paste: paste
        }
    }
}