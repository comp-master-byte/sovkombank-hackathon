import { REMOVE_USER, SET_USERS } from "../types/types";

export const getAllUsersForRegistration = (payload) => ({type: SET_USERS, payload});
export const removeSelectedUser = (payload) => ({type: REMOVE_USER, payload});