import axios from "axios";

const api = axios.create({
    baseURL: 'https://backend-portalturismo-wd1t.onrender.com/api'
})

export default api;