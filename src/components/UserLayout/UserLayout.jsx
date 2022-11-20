import React, { useEffect, useState } from "react";
import styles from "./UserLayout.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { Button } from '@consta/uikit/Button';
import { useLogout } from "../../hooks/useLogout"
import Modal from "react-modal";
import { useAdminLayout } from "./hooks/useAdminLayout";
import moment from "moment";
import cookie from "js-cookie";
import { fetchAccountInfo } from "../../store/async-actions/currency.js"

const TOKEN = cookie.get("token");

const config = {
    headers: {
        "Authorization": `Basic ${TOKEN}`
    }
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '700px',
        minHeight: '400px',
        borderRadius: '20px'
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.5)"
    }
};

const UserLayout = () => {
    const logout = useLogout();
    const {
        isOpenModal,
        handleCloseModal,
        handleOpenModal
    } = useAdminLayout();
    const dispatch = useDispatch();
    const currency = useSelector(state => state.currency.currency);

    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData) {
            setUser(userData);
        }
    }, [TOKEN])

    return (
        <div className={styles.layoutWrapper}>
            <Modal
                isOpen={isOpenModal}
                onRequestClose={handleCloseModal}
                style={customStyles}
            >
                <div className={styles.rowBlock}>
                    <div className={styles.rowBlockItem}>
                        <div style={{ marginBottom: 5, fontWeight: 500 }}>Телефон:</div>
                        <div>{user?.phone}</div>
                    </div>
                    <div className={styles.rowBlockItem}>
                        <div style={{ marginBottom: 5, fontWeight: 500 }}>Дата рождения:</div>
                        <div>{moment.unix(user?.date).format('DD.MM.YYYY')}</div>
                    </div>
                </div>
                <div className={styles.columnBlock}>
                    <div className={styles.leftColumnBlock}>
                        <div className={styles.leftColumnBlockItem}>
                            <div style={{ marginBottom: 5, fontWeight: 500 }}>E-mail:</div>
                            <div>{user?.email}</div>
                        </div>
                        <div className={styles.leftColumnBlockItem}>
                            <div style={{ marginBottom: 5, fontWeight: 500 }}>Номер паспорта:</div>
                            <div>{user?.passport}</div>
                        </div>
                    </div>
                    <div className={styles.rightColumnBlock}>
                        <div style={{ marginBottom: 5, fontWeight: 500 }}>Счета: </div>
                        {currency.map(cur =>
                            <div style={{ width: 600 }}>
                                <div>Валюта: {cur.currencyName}</div>
                                <div>Номер: {cur.accountNumber}</div>
                            </div>
                        )}
                    </div>
                </div>
            </Modal>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.headerLeftColumn}>
                        <Link className={styles.headerLinks__link} to="/user/currencyConverter">Конвертер валют</Link>
                        <Link className={styles.headerLinks__link} to="/user/graph">График</Link>
                    </div>
                    <div onClick={handleOpenModal} className={styles.headerRightColumn}>
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