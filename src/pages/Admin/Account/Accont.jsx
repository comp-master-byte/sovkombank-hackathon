import React from 'react'
import styles from "./Account.module.scss";
import { useAccount } from '../../../hooks/useAccount';
import CardsList from '../../../components/CardsList/CardsList';
import { TextField } from '@consta/uikit/TextField';

const Accont = () => {
    const { usersQuery, searchQuery, handleSearchQuery } = useAccount();

    return (
        <div className={styles.accountWrapper}>
            <div className={styles.container}>
                <TextField
                    type="text"
                    placeholder="Поиск..."
                    className={styles.account__search}
                    value={searchQuery}
                    onChange={handleSearchQuery}
                />
                <CardsList users={usersQuery} />
            </div>
        </div>
    )
}

export default Accont;