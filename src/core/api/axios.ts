import axios from "axios";

axios.defaults.withCredentials = true;

const api = axios.create({
    headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "X-RapidAPI-Key": "69d8f2293bmshc2fb26377230262p13f0cajsn051f7b391551",
    },
    baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/",
});

export default api;
export { axios };
