import React from "react";
import styles from "./Login.module.scss";
import { useLogin } from "../../../hooks/useLogin";
import { TextField } from "@consta/uikit/TextField";
import { Loader } from '@consta/uikit/Loader';
import { Button } from "@consta/uikit/Button";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Login = () => {
    const { loginForm, handleChange, handleSubmit, isLoading } = useLogin();

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginWrapper__logoImg}>
                <img src={logo} alt="" />
            </div>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <div className={styles.innerForm}>
                    <h1>Войдите в свой аккаунт</h1>
                    <p>Введите свои данные чтобы войти</p>
                    <div className={styles.inputSection}>
                        <TextField
                            value={loginForm.phone}
                            onChange={handleChange}
                            className={styles.inputSection__input}
                            name="phone"
                            label="Номер телефона"
                        />
                        <TextField
                            value={loginForm.password}
                            onChange={handleChange}
                            className={styles.inputSection__input}
                            name="password"
                            label="Пароль"
                        />
                    </div>
                    <p className={styles.forgotPassword}>
                        Забыли свой пароль?
                    </p>
                    {isLoading
                        ? <div className={styles.signIn}>
                            <Loader size="m" />
                        </div>
                        :
                        <div className={styles.signIn}>
                            <Button
                                form="default"
                                view="primary"
                                label="Войти"
                                size="m"
                                className={styles.signIn__btn}
                            />
                            <div>
                                <Link to="/register" className={styles.createAccount}>Создать аккаунт</Link>
                            </div>
                        </div>
                    }
                </div>
            </form >
        </div >
    )
}

export default Login;