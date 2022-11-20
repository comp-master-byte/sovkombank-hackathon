import axios from "axios";
import { blockUser, getAllUsers, getAllUsersForRegistration, removeSelectedUser } from "../action-creators/users";

export const fetchAllUsersRegistration = (config) => {
    return async dispatch => {
        try {
            const response = await axios.get('http://194.58.123.176:8000/api/admin/users/registration', config);
            dispatch(getAllUsersForRegistration(response.data));
        } catch(error) {
            console.log(error);
        }
    }
}

export const registrationIsAcceptUser = (requestId, isAccepted, config) => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://194.58.123.176:8000/api/admin/users/registration/accept/${requestId}/${isAccepted}`, config);
            if(response.status === 200) {
                dispatch(removeSelectedUser(requestId));
            }
        } catch(error) {
            console.log(error);
        }
    }
}

export const fetchAllUsers = (config) => {
    return async dispatch => {
        try {   
            const response = await axios.get('http://194.58.123.176:8000/api/admin/users', config);
            dispatch(getAllUsers(response.data));
        } catch(error) {
            console.log(error);
        }
    }
}

export const setBlockUser = (userId, isBlocked, config) => {
    return async dispatch => {
        try {
            const response = await axios.put(`http://194.58.123.176:8000/api/admin/users/block/${userId}/${isBlocked}`, "" ,config);
            if(response.status === 200) {
                dispatch(blockUser(userId));
            }
        } catch(error) {
            console.log(error);
        }
    }
}