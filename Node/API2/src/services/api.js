import axios from 'axios'

const api = axios.create({
    baseURL: 'http:/168.196.215.83/'
});

export default api;
