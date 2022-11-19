import { SET_USERS, REMOVE_USER } from "../types/types";

const initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS:
            return {...state, users: action.payload}
        case REMOVE_USER:
            return {...state, users: state.users.filter(user => user.id !== action.payload)}
        default:
            return state;
    }
}