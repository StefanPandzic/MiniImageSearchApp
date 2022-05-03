import axios from "axios";


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ha0NcSyBTcpmDLg4YkrqZuGPg5DQQOZ3UUaxSqkwrw8'
    }
});