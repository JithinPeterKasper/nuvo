import axios from 'axios';

const baseURL = "https://fakestoreapi.com/";
const api = axios.create({
    baseURL: baseURL,
    headers:{
        "Content-Type": "application/json",
    },
});

export default class API {
    fetchProduct = async(params) => {
        return api.get("/products/", {params});
    };
}