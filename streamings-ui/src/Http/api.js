import axios from "axios";

export const Http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})