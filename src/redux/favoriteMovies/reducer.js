import * as types from './types';

const initialState = {
    list: [],
    isFetching: false,
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.FAVORITE_MOVIES_UPDATE_LIST:
           return {
               ...state,
               list: action.value
           }
        
        case types.FAVORITE_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }
    
        default:
            return state;
    }
}
