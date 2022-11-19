import { useState } from "react";

export const useRegister = () => {
    const [registerForm, setRegisterForm] = useState({name: "", phone: "", email: "", password: "", passport: ""});
    const [birthDate, setBirthDate] = useState(null);

    const handleChange = (event) => setRegisterForm({...registerForm, [event.name]: event.value});

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return {
        registerForm,
        handleChange,
        handleSubmit,
        birthDate, 
        setBirthDate
    }
}