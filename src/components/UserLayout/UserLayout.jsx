import React, { useEffect, useState } from "react";
import styles from "./UserLayout.module.scss";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { Button } from '@consta/uikit/Button';
import { useLogout } from "../../hooks/useLogout"

const UserLayout = () => {
    const logout = useLogout();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData) {
            setUser(userData);
        }
    }, [])

    return (
        <div className={styles.layoutWrapper}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.headerLeftColumn}>
                        <Link className={styles.headerLinks__link} path="/user/currencyConverter">Конвертер валют</Link>
                    </div>
                    <div className={styles.headerRightColumn}>
                        <div className={styles.profile}>
                            {user?.name}
                            <Button
                                label="Выйти"
                                onClick={logout}
                                className={styles.profile__btn}
                            />
                        </div>
                    </div>
                </header>
                <Outlet />
            </div>
        </div>
    )
}

export default UserLayout;