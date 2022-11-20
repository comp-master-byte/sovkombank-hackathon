import React from "react";
import { useSelector } from "react-redux/es/exports";
import { Informer } from '@consta/uikit/Informer';
import Register from "../../components/Auth/Register/Register";
import styles from "./RegisterPage.module.scss";
import classNames from "classnames";

const RegisterPage = () => {
    const error = useSelector(state => state.register.error);
    const isShowError = useSelector(state => state.register.isShowError);
    const isSuccessRegister = useSelector(state => state.register.isSuccessRegister);

    return (
        <div className={styles.registerWrapper}>
            <Informer
                status={isSuccessRegister ? "success" : "alert"}
                view="bordered"
                title={isSuccessRegister ? "Регистрация прошла успешно" : "Произошла ошибка"}
                label={isSuccessRegister ? "Переадресовываем на главную страницу" : error}
                className={classNames(styles.warning, {
                    [styles.warningActive]: isShowError || isSuccessRegister
                })}
            />

            <Register />
        </div>
    )
}

export default RegisterPage;