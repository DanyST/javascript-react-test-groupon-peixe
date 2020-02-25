import * as types from './types';

const initialState = {
    list: [],
    isFetching: false,
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.SEARCH_MOVIE_UPDATE_LIST:
            return {
                ...state,
                list: action.value
            }
        case types.SEARCH_MOVIE_FETCHING:
            return {
                ...state,
                isFetching: action.value,
            }    
        default:
            return state;
    }
}