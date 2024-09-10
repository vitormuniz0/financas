import axios from "axios";

export const api = new axios.create({
    baseURL: 'https://financas-server-5zow.onrender.com',
})