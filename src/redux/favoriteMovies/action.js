import * as types from "./types";
import * as api from "../../webservices";

function updateFavoriteList(value) {
    return {
        type: types.FAVORITE_MOVIES_UPDATE_LIST,
        value
    };
}

function updateFetching(value) {
    return {
        type: types.FAVORITE_FETCHING,
        value
    };
}

export function fetchFavoritesList() {
    return function(dispatch, getState) {
        dispatch(updateFetching(true));

        api.fetchFavorites()
            .then(res => {
                dispatch(updateFavoriteList(res.data));
            })
            .catch(error => console.error("fetchFavoritesList err: ", error))
            .finally(() => dispatch(updateFetching(false)));
    };
}

export function postFavorite(movie) {
    return function(dispatch, getState) {
        if (!movie) {
            return;
        }

        dispatch(updateFetching(true));

        api.addNewFavorite(movie)
            .then(res => console.log(res))
            .catch(error => console.error("addNewFavorite: ", error))
            .finally(() => dispatch(updateFetching(false)));
    };
}

export function deleteFavorite(movie) {
    return function(dispatch, getState) {
        if (!movie) {
            return;
        }

        dispatch(updateFetching(true));

        api.deleteFavoriteById(movie.imdbID)
            .then(res => {})
            .catch(error => console.error("deleteFavorite err: ", error))
            .finally(() => dispatch(updateFetching(false)));
    };
}

export function toggleStoreFavorite(movie, isCreate) {
    return function(dispatch, getState) {
        if (!movie) {
            return;
        }

        if (isCreate) {
            dispatch(postFavorite(movie));
        } else {
            dispatch(deleteFavorite(movie));
        }
    };
}
