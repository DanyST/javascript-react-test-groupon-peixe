import * as types from './types';

export function updatePopularMoviesList(list) {
    return {
        type: types.POPULAR_MOVIES_UPDATE_LIST,
        value: list
    }
}

export function updateFetching(value) {
    return {
        type: types.POPULAR_MOVIES_FETCHING,
        value
    }
}

export function updateHouseSelected(value) {
    return {
        type: types.POPULAR_MOVIES_UPDATE_SELECTED,
        value        
    }
}