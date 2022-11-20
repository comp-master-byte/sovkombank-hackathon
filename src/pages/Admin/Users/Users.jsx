import React, { useEffect } from "react";
import styles from "./Users.module.scss";
import CardsList from "../../../components/Common/CardsList/CardsList.jsx";
import { useUsers } from "../../../hooks/useUsers";
import { TextField } from '@consta/uikit/TextField';

const Users = () => {
    const { filterUsers, searchUsersQuery, handleSearchQuery, config, dispatch, fetchAllUsers } = useUsers();

    useEffect(() => {
        dispatch(fetchAllUsers(config));
    }, [config])

    return (
        <div className={styles.usersWrapper}>
            <TextField
                type="text"
                placeholder="Поиск..."
                className={styles.account__search}
                value={searchUsersQuery}
                onChange={handleSearchQuery}
            />
            {filterUsers.length > 0
                ? <CardsList requests={filterUsers} isUser />
                : <h1>Пользователей не найдено</h1>
            }
        </div>
    )
}

export default Users;