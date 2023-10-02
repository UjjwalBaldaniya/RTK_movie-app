import axios from "axios";

const createApi = axios.create({
    baseURL: "https://www.omdbapi.com",
});

export default createApi