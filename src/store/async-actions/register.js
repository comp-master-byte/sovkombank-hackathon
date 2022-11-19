import axios from "axios";
import { errorRegisterCompleted, hideErrorInformer, hideSuccessRegisterInformer, loadingRegister, successRegisterCompleted } from "../action-creators/register";

export const submitUserRegistrationData = (userData) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://194.58.123.176:8000/api/users/register', userData);
            if(response.status === 200) {
                dispatch(successRegisterCompleted());
            }
        } catch(error) {
            dispatch(errorRegisterCompleted(error.response.data.message))
            setTimeout(() => {
                dispatch(hideErrorInformer())
            }, 5000)
        }
    }
}