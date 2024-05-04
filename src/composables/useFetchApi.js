import { handleAccessToken } from '../utils/api/login.js';

export default async function useFetchApi(url, props) {

    const BEARER_TOKEN = await handleAccessToken();

    if(!props.body) {
        console.error('É obrigatório passar o body'); //Temporário
        return;
    }

    var jsonData = JSON.stringify(props.body)

    return fetch(url, {
        ...props, 
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${BEARER_TOKEN}`,
            ...props.headers
        },
        body: jsonData
    }).then((data) => data.json());
}