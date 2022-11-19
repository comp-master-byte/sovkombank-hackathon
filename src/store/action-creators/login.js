import { CLEAR_USER, ERROR_REGISTER, LOADING_LOGIN, SUCCESS_LOGIN } from "../types/types";

export const loadingLogin = () => ({type: LOADING_LOGIN});
export const successLogin = (payload) => ({type: SUCCESS_LOGIN, payload});
export const errorLogin = (payload) => ({type: ERROR_REGISTER, payload});
export const clearUserData = () => ({type: CLEAR_USER})