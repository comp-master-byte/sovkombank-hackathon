import { BLOCK_USER, REMOVE_REQUEST, SET_REQUESTS, SET_USERS } from "../types/types";

export const getAllUsersForRegistration = (payload) => ({type: SET_REQUESTS, payload});
export const removeSelectedUser = (payload) => ({type: REMOVE_REQUEST, payload});
export const getAllUsers = (payload) => ({type: SET_USERS, payload});
export const blockUser = (payload) => ({type: BLOCK_USER, payload});