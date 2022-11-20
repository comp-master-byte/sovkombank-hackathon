import React from "react";
import styles from "./Register.module.scss";
import { TextField } from "@consta/uikit/TextField";
import { DatePicker } from "@consta/uikit/DatePicker";
import { Loader } from '@consta/uikit/Loader';
import { Button } from "@consta/uikit/Button";
import { useRegister } from "../../../hooks/useRegister";
import { Link } from "react-router-dom";

const Register = () => {
    const {
        registerForm,
        handleChange,
        handleSubmit,
        birthDate,
        setBirthDate,
        isLoading,
        isSuccessRegister
    } = useRegister();

    return (
        <div className={styles.registerWrapper}>
            <form onSubmit={handleSubmit} className={styles.registerForm}>
                <div className={styles.registerTitle}>
                    <h1 className={styles.registerTitle__title}>Регистрация</h1>
                    <p className={styles.registerTitle__text}>Введите информацию о себе чтобы зарегестрироваться в системе</p>
                </div>
                <main className={styles.inputsForm}>
                    <div className={styles.inputsRow}>
                        <TextField
                            value={registerForm.name}
                            onChange={handleChange}
                            className={styles.inputsForm__fio}
                            name="name"
                            label="ФИО"
                        />
                        <DatePicker
                            type="date"
                            value={birthDate}
                            format="dd.MM.yyyy"
                            onChange={({ value }) => setBirthDate(value)}
                            className={styles.inputsForm__datePicker}
                            name="birthDate"
                            label="Дата рождения"
                        />
                    </div>
                    <div className={styles.inputsRow}>
                        <TextField
                            value={registerForm.email}
                            onChange={handleChange}
                            className={styles.inputsForm__inputSmall}
                            name="email"
                            label="Email"
                        />
                        <TextField
                            value={registerForm.phone}
                            onChange={handleChange}
                            className={styles.inputsForm__inputSmall}
                            name="phone"
                            label="Телефон"
                        />
                    </div>
                    <div className={styles.inputsRow}>
                        <TextField
                            value={registerForm.passport}
                            onChange={handleChange}
                            className={styles.inputsForm__inputSmall}
                            name="passport"
                            label="Паспортные данные"
                        />
                        <TextField
                            value={registerForm.password}
                            onChange={handleChange}
                            className={styles.inputsForm__inputSmall}
                            name="password"
                            label="Пароль"
                        />
                    </div>
                    {isLoading || isSuccessRegister
                        ? <Loader size="m" />
                        :
                        <div className={styles.signUp}>
                            <Button
                                form="default"
                                view="primary"
                                label="Зарегестрироваться"
                                size="m"
                                className={styles.signUp__btn}
                            />
                            <div className={styles.backToLogin}>
                                <Link to="/" className={styles.backToLogin__btn}>Вернуться назад</Link>
                            </div>
                        </div>
                    }
                </main>
            </form>
        </div>
    )
}

export default Register;