import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitLoginData } from "../store/async-actions/login";
import cookie from "js-cookie";

export const useLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.login.user);
    const isLoading = useSelector(state => state.login.isLoading);
    const [loginForm, setLoginForm] = useState({phone: "", password: ""});

    const handleChange = (event) => setLoginForm({...loginForm, [event.name]: event.value});

    const handleSubmit = (event) => {
        event.preventDefault();
        const loginFormToBase64 = btoa(`${loginForm.phone}:${loginForm.password}`);
        const config = {
            headers: {
                "Authorization": `Basic ${loginFormToBase64}`
            }
        }
        dispatch(submitLoginData(config));
        cookie.set("token", loginFormToBase64);
    }

    useEffect(() => {
        const token = cookie.get("token");
        if(token) {
            if(user.role === "USER") {
                navigate("/user/currencyConverter")
            } else {
                navigate("/admin/account")
            }
        }
    }, [user])

    return {
        loginForm,
        handleChange,
        handleSubmit,
        user,
        isLoading
    }
}