import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Button } from '@consta/uikit/Button';
import { useLogout } from "../../../hooks/useLogout";
import { useAdminLayout } from "../../UserLayout/hooks/useAdminLayout";

const Header = () => {
    const logout = useLogout();

    return (
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
    )
}

export default Header;