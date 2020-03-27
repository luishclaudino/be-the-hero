import axios from 'axios';

//Colocar seu IP aqui!
const api = axios.create({
    baseURL: 'http://192.168.0.8:3333' 
})

export default api;