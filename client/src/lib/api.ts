import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: false, // Change to true if using cookies
});

export default API;
