import { SET_REQUESTS, REMOVE_REQUEST, SET_USERS, BLOCK_USER } from "../types/types";

const initialState = {
    requests: [],
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_REQUESTS:
            return {...state, requests: action.payload}
        case REMOVE_REQUEST:
            return {...state, requests: state.requests.filter(user => user.id !== action.payload)}
        case SET_USERS:
            return {...state, users: action.payload}
        case BLOCK_USER:
            return {...state, users: 
                state.users.map(user => {
                    if(user.id === action.payload) {
                        return {
                            ...user,
                            isBlocked: !user.isBlocked
                        }
                    } else {
                        return user;
                    }
                })}
        default:
            return state;
    }
}