import axios from "axios";
import qs from "qs";
import { BASE_URL, API_KEY } from "../config/api";

export function configureAxios() {
    axios.defaults.baseURL = `${BASE_URL}?${qs.stringify({
        apikey: API_KEY,
        v: 1
    })}`;
    // Here also we can add default headers content type
}

export function fetchPopularMovies() {
    const url = `&${qs.stringify({ s: "batman", type: "movie" })}`;
    axios.get(url);
}
