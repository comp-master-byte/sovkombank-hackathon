import axios from "axios";
import { getAllUsersForRegistration, removeSelectedUser } from "../action-creators/users";

export const fetchAllUsersRegistration = () => {
    return async dispatch => {
        try {
            const response = await axios.get('http://194.58.123.176:8000/api/admin/users/registration');
            dispatch(getAllUsersForRegistration(response.data));
        } catch(error) {
            console.log(error);
        }
    }
}

export const registrationIsAcceptUser = (userId, isAccepted) => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://194.58.123.176:8000/api/admin/users/registration/accept/${userId}/${isAccepted}`);
            if(response.status === 200) {
                dispatch(removeSelectedUser(userId));
            }
        } catch(error) {
            console.log(error);
        }
    }
}