import React from 'react'
import styles from "./Account.module.scss";
import { useAccount } from '../../../hooks/useAccount';
import CardsList from '../../../components/Common/CardsList/CardsList';
import { TextField } from '@consta/uikit/TextField';

const Accont = () => {
    const { usersQuery, searchQuery, handleSearchQuery } = useAccount();

    return (
        <div className={styles.accountWrapper}>
            <TextField
                type="text"
                placeholder="Поиск..."
                className={styles.account__search}
                value={searchQuery}
                onChange={handleSearchQuery}
            />
            {usersQuery.length > 0
                ? <CardsList requests={usersQuery} />
                : <h1>Заявок не найдено...</h1>
            }
        </div>
    )
}

export default Accont;