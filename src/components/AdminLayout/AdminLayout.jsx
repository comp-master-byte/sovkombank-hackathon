import React from "react";
import styles from "./AdminLayout.module.scss";
import { Link, Outlet } from "react-router-dom";
import { Button } from '@consta/uikit/Button';
import { useLogout } from "../../hooks/useLogout"

const AdminLayout = () => {
    const logout = useLogout();
    return (
        <div className={styles.layoutWrapper}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.headerLeftColumn}>
                        <Link className={styles.headerLeftColumn__link} to="/admin/account">Заявки</Link>
                        <Link className={styles.headerLeftColumn__link} to="/admin/users">Пользователи</Link>
                    </div>
                    <div className={styles.headerRightColumn}>
                        <Button
                            label="Выйти"
                            className={styles.headerRightColumn__btn}
                            onClick={logout}
                        />
                    </div>
                </header>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout;