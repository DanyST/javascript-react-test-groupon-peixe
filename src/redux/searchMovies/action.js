import * as types from "./types";
import * as api from "../../webservices";

function updateSearchMovieList(value) {
    return {
        type: types.SEARCH_MOVIE_UPDATE_LIST,
        value
    };
}

function updateFetching(value) {
    return {
        type: types.SEARCH_MOVIE_FETCHING,
        value
    };
}

export function fetchSearchMovieByTitle(title) {
    return function(dispatch, getState) {
        if (!title) {
            return;
        }

        dispatch(updateFetching(true));

        api.fetchSearchMovieListByTitle(title)
            .then(res => {                
                dispatch(updateSearchMovieList(res.data.Search));                                                                                                                                            
            })
            .catch(error =>
                console.error("fetchSearchMovieByTitle err: ", error)
            )
            .finally(() => dispatch(updateFetching(false)));
    };
}
