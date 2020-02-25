import * as types from "./types";
import * as api from "../../webservices";

function updateMovieDetail(value) {
    return {
        type: types.DETAILED_MOVIE_UPDATE,
        value
    };
}

function updateFetching(value) {
    return {
        type: types.DETAILED_MOVIE_FETCHING,
        value
    };
}

export function updateFavoriteToggle(value) {
    return {
        type: types.DETAILED_MOVIE_FAVORITE_TOGGLE,
        value
    };
}

export function fetchMovieDetail(movieId) {
    return function(dispatch, getState) {
        dispatch(updateFetching(true));

        if (!movieId) {
            return;
        }

        api.fetchMovieById(movieId)
            .then(res => {
                if (res.data.Response === "False") {
                    // Id de pelicula inexistente, aqui deberiamos enviar
                    // a una pantalla de error 404
                    return;
                }

                dispatch(updateMovieDetail(res.data));

                return api.fetchFavoriteById(res.data.imdbID);
            })
            .then(resFavorite => {
                if (!resFavorite) {
                    // No es pelcula favorita
                    dispatch(updateFavoriteToggle(false));
                    return
                }
                dispatch(updateFavoriteToggle(true));
            })
            .catch(error => console.error("fetchMovieDetail err: ", error))
            .finally(() => dispatch(updateFetching(false)));
    };
}
