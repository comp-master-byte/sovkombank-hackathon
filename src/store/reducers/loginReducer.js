import { LOADING_LOGIN, SUCCESS_LOGIN, ERROR_LOGIN, CLEAR_USER } from "../types/types";

const initialState = {
    isLoading: false,
    user: null,
    error: null,
    isSuccessLogin: false
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING_LOGIN:
            return {...state, isLoading: true}
        case SUCCESS_LOGIN:
            return {...state, isLoading: false, user: action.payload, error: null}
        case ERROR_LOGIN:
            return {...state, isLoading: false, user: null, error: action.payload}
        case CLEAR_USER:
            return {...state, user: null, error: null, isLoading: false}
        default:
            return state;
    }
}