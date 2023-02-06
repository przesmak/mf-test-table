import axios from 'axios';

const app = axios.create({
    baseURL: '',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

export default app;