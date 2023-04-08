import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: "http://127.0.0.1:8002/api/v1/",
});