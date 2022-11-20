import React from "react";
import styles from "./AdminLayout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "../Common/Header/Header";

const AdminLayout = () => {
    return (
        <div className={styles.layoutWrapper}>
            <div className={styles.container}>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout;