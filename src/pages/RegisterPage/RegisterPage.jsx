import React from "react";
import Register from "../../components/Register/Register";
import styles from "./RegisterPage.module.scss";

const RegisterPage = () => {
    return (
        <div className={styles.registerWrapper}>
            <Register />
        </div>
    )
}

export default RegisterPage;