import axios from "axios";

//viacep.com.br/ws/ e a base para buscar

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;