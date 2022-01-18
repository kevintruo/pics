import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID FKmtAnnuk8ae2ov4jXrxciyWWXz7DNzRKc6cMEoH_JE'
    }
});