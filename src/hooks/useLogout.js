import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const navigate = useNavigate();
    const logout = () => {
        cookie.remove("token");
        navigate('/');
    }
    return logout;
}