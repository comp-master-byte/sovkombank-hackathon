import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideSuccessRegisterInformer, loadingRegister } from "../store/action-creators/register";
import { submitUserRegistrationData } from "../store/async-actions/register";

export const useRegister = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSuccessRegister = useSelector(state => state.register.isSuccessRegister);
    
    const isLoading = useSelector(state => state.register.isLoading);
    const error = useSelector(state => state.register.error);

    const [registerForm, setRegisterForm] = useState({name: "", phone: "", email: "", password: "", passport: ""});
    const [birthDate, setBirthDate] = useState(null);

    const handleChange = (event) => setRegisterForm({...registerForm, [event.name]: event.value});

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            ...registerForm,
            birthDate: new Date(birthDate).getTime() / 1000
        }
        dispatch(loadingRegister());
        dispatch(submitUserRegistrationData(userData));
        if(!isLoading && !error) {
            setTimeout(() => {
                navigate("/");
                dispatch(hideSuccessRegisterInformer());
            }, 3000)
        }
    }

    return {
        registerForm,
        handleChange,
        handleSubmit,
        birthDate, 
        setBirthDate,
        error,
        isLoading,
        isSuccessRegister
    }
}