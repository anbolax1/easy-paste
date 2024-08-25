import axios from "axios";

const useApi = () => {
    const api = async (
        url: string,
        method = 'get',
        data = null,
        headers = {},
        params = {}
    ) => {
        try {
            const res = await axios({
                url: `${process.env.NEXT_PUBLIC_BASE_API}/${url}`,
                method,
                data,
                headers,
                params,
            });

            if (res.status === 200) {
                return res;
            }
        }
        catch (e: any) {
            if(e.name == 'CanceledError') {
                console.log(`Request ${url} has been aborted`)
            } else {
                console.log(`Error name: ${e.name}; Error message: ${e.message}/`)
            }
        }
    }

    return {api};
};

export {useApi};