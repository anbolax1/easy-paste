import {useApi} from "../hooks/useApi";

const { api } = useApi();

export async function getPastes(endpoint: string, method: string, headers: {}) {
    let response = await api(endpoint, method, headers);
    return response?.data;
}

export async function getPasteInfo(endpoint: string, method: string) {
    let response = await api(endpoint, method);
    return response?.data;
}