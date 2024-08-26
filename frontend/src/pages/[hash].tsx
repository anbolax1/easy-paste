import PasteItemView from "../components/Paste/PasteItemView";
// import {getPasteInfo, getPastes} from "../functions/getData";
// import {NextPageContext} from "next";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

interface Paste {
    title: string;
    paste_content: string;
    expires_at: string;
    visibility: string;
    language?: string;
}

const PasteView = () => {
    const router = useRouter();
    const [paste, setPaste] = useState<Paste | null>(null);

    const hash = router.query.hash;
    console.log(hash);

    useEffect(() => {
        const fetchPaste = async () => {
            const res = await fetch(`http://localhost/api/paste/${hash}`);
            const data = await res.json();
            console.log(data);
            setPaste(data);
        };
        if(hash) {
            fetchPaste();
        }
    }, [hash]);

    return (
        <div>
            <PasteItemView
                title={paste?.title}
                content={paste?.paste_content}
                expiresAt={paste?.expires_at}
                visibility={paste?.visibility}
                language={paste?.language}
            />
        </div>
    );
};

export default PasteView;

/*
interface PasteViewPageContext extends NextPageContext {
    query: {
        hash: string
    }
}

export async function getServerSideProps(context: PasteViewPageContext) {
    let query = context.query;
    let hash = query.hash;

    let paste = await getPasteInfo(`paste/${hash}`, 'get')

    return {
        props: {
            paste: paste
        }
    }
}*/
