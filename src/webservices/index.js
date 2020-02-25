import axios from "axios";
import qs from "qs";
import _ from "lodash";
import { BASE_URL, API_KEY } from "../config/api";

const GEEKFLIX_LOCAL_STORAGE_KEY = "GEEKFLIX";

export function configureAxios() {
    axios.defaults.baseURL = `${BASE_URL}?${qs.stringify({
        apikey: API_KEY,
        v: 1
    })}`;
    // Here also we can add default headers content type
}

export function fetchPopularMovies() {
    const url = `&${qs.stringify({ s: "batman", type: "movie" })}`;
    return axios.get(url);
}

export function fetchMovieById(id) {
    const url = `&${qs.stringify({ i: id, type: "movie" })}`;
    return axios.get(url);
}

export function fetchSearchMovieListByTitle(movieTitle) {
    const url = `&${qs.stringify({ s: movieTitle, type: "movie" })}`;
    return axios.get(url);
}

export function fetchFavorites() {
    const favoriteMockEndPoint = new Promise((resolve, reject) => {
        setTimeout(function() {
            const favorites = _getFavoritesFromLocalStorage();

            resolve({ data: favorites });
        }, 250);
    });

    return favoriteMockEndPoint;
}

export function addNewFavorite(movie) {
    const addFavoriteMockEndPoint = new Promise((resolve, reject) => {
        setTimeout(function() {
            const favorites = _getFavoritesFromLocalStorage();

            const newFavoriteList = [movie, ...favorites];

            localStorage.setItem(
                GEEKFLIX_LOCAL_STORAGE_KEY,
                JSON.stringify({ favorites: newFavoriteList })
            );
            resolve(movie);
        }, 250);
    });

    return addFavoriteMockEndPoint;
}

export function fetchFavoriteById(id) {
    const fetchFavoriteMockEndPoint = new Promise((resolve, reject) => {
        setTimeout(function() {
            const favorites = _getFavoritesFromLocalStorage();

            const favoriteFounded = favorites.find(fav => fav.imdbID === id);

            resolve(favoriteFounded);
        }, 250);
    });

    return fetchFavoriteMockEndPoint;
}

export function deleteFavoriteById(id) {
    const deleteFavoriteMockEndPoint = new Promise((resolve, reject) => {
        setTimeout(function() {
            const favorites = _getFavoritesFromLocalStorage();
            
            const favoriteFounded = favorites.find(fav => fav.imdbID === id);
            const filterFavorites = favorites.filter(fav => fav.imdbID !== id);

            localStorage.setItem(
                GEEKFLIX_LOCAL_STORAGE_KEY,
                JSON.stringify({ favorites: filterFavorites })
            );

            resolve(favoriteFounded);
        }, 250);
    });

    return deleteFavoriteMockEndPoint;
}

function _getFavoritesFromLocalStorage() {
    const favoritesJSON = localStorage.getItem(GEEKFLIX_LOCAL_STORAGE_KEY);
    const favorites = favoritesJSON ? JSON.parse(favoritesJSON).favorites : [];

    return favorites;
}
