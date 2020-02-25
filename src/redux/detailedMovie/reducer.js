import * as types from "./types";

const initialState = {
    movie: null,
    isFetching: false,
    isFavorite: false
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.DETAILED_MOVIE_UPDATE:
            return {
                ...state,
                movie: action.value
            };
        case types.DETAILED_MOVIE_FETCHING:
            return {
                ...state,
                isFetching: action.value
            };
        case types.DETAILED_MOVIE_FAVORITE_TOGGLE:
            return {
                ...state,
                isFavorite: action.value
            };

        default:
            return state;
    }
}
