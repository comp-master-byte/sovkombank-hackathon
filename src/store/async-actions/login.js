import axios from "axios";
import { errorLogin, loadingLogin, successLogin } from "../action-creators/login";

export const submitLoginData = (config) => {
    return async dispatch => {
        try {
            dispatch(loadingLogin());
            const response = await axios.get('http://194.58.123.176:8000/api/users/login', config);
            dispatch(successLogin(response.data));
        } catch(error) {
            dispatch(errorLogin("ошибка"))
        }
    }
}