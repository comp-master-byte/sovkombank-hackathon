import { SUCCESS_REGISTER, ERROR_REGISTER, LOADING_REGISTER, HIDE_ERROR, HIDE_SUCCESS_REGISTER } from "../types/types";

export const loadingRegister = () => ({type: LOADING_REGISTER});
export const successRegisterCompleted = () => ({type: SUCCESS_REGISTER});
export const errorRegisterCompleted = (payload) => ({type: ERROR_REGISTER, payload});
export const hideErrorInformer = () => ({type: HIDE_ERROR});
export const hideSuccessRegisterInformer = () => ({type: HIDE_SUCCESS_REGISTER});