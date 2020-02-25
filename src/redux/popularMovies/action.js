import * as types from "./types";
import * as api from "../../webservices";

function updatePopularMoviesList(list) {
    return {
        type: types.POPULAR_MOVIES_UPDATE_LIST,
        value: list
    };
}

function updateFetching(value) {
    return {
        type: types.POPULAR_MOVIES_FETCHING,
        value
    };
}

export function updateHouseSelected(value) {
    return {
        type: types.POPULAR_MOVIES_UPDATE_SELECTED,
        value
    };
}

export function fetchPopularMovieList() {
    // redux thunks allow this
    return function(dispatch, getState) {
        dispatch(updateFetching(true));

        api.fetchPopularMovies()
            .then(res => {
                console.log("res:", res);
            })
            .catch(error => console.error("fetchPopularMovies err: " + error))
            .finally(_ => dispatch(updateFetching(false)));
    };
}
