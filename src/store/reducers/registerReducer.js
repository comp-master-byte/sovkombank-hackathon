import { SUCCESS_REGISTER, ERROR_REGISTER, LOADING_REGISTER, HIDE_ERROR, HIDE_SUCCESS_REGISTER } from "../types/types";

const initialState = {
    isLoading: false,
    error: null,
    isSuccessRegister: false,
    isShowError: false
}

export const registerReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING_REGISTER:
            return {...state, isLoading: true, error: null}
        case SUCCESS_REGISTER:
            return {...state, isLoading: false, error: null, isSuccessRegister: true}
        case ERROR_REGISTER:
            return {...state, isLoading: false, error: action.payload, isSuccessRegister: false, isShowError: true}
        case HIDE_ERROR:
            return {...state, isShowError: false}
        case HIDE_SUCCESS_REGISTER:
            return {...state, isSuccessRegister: false}
        default:
            return state;
    }
}