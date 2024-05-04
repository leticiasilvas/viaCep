import axios from "axios";      

export const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
    timeout: 1000,
    Headers: {
       'Content-Type': 'application/json'
    }
});