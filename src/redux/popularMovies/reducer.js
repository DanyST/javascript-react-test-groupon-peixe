import * as types from './types';

const initialState = {
    list: [],
    isFetching: false,
    selected: null,
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.POPULAR_MOVIES_UPDATE_LIST:
            return {
                ...state,
                list: action.value,                                                                                
            } 
        case types.POPULAR_MOVIES_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }
        case types.POPULAR_MOVIES_UPDATE_SELECTED:
            return {
                ...state,
                selected: action.value
            }
                               
        default:
            return state;
    }    
}