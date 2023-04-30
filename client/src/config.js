import axios from "axios"

export const axiosInstance = axios.create({
    baseURL:"https://rentifyab.onrender.com/api/"
})