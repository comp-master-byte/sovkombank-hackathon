import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUserData } from "../store/action-creators/login";
import { submitLoginData } from "../store/async-actions/login";

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
    }

    useEffect(() => {
        if(user && !isLoading) {
            setTimeout(() => {
                navigate("/admin/account")
            } , 1000)
            return () => dispatch(clearUserData());
        }
    }, [user, isLoading])

    return {
        loginForm,
        handleChange,
        handleSubmit,
        user
    }
}