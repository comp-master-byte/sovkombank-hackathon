import { useState } from "react";

export const useLogin = () => {
    const [loginForm, setLoginForm] = useState({phone: "", password: ""});

    const handleChange = (event) => setLoginForm({...loginForm, [event.name]: event.value});

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return {
        loginForm,
        handleChange,
        handleSubmit
    }
}