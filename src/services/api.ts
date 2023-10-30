// src/services/api.ts
import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_ROOT_URL,
    headers : {
        'Content-Type': 'application/json',
    },
    timeout: 2000
});



export default api;

