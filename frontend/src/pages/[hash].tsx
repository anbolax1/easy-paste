import PasteItemView from "../components/Paste/PasteItemView";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useAuth} from "../contexts/AuthContext";

interface Paste {
    title: string;
    paste_content: string;
    expires_at: string;
    visibility: string;
    language?: string;
}

const PasteView = () => {
    const { token } = useAuth();

    const router = useRouter();
    const [paste, setPaste] = useState<Paste | null>(null);

    const hash = router.query.hash;

    useEffect(() => {
        let headers = {};
        if (token) {
            headers = {
                'Authorization': `Bearer ${token}`
            };
        }
        const fetchPaste = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/${hash}`,{ method: 'GET', headers });
            const data = await res.json();
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
