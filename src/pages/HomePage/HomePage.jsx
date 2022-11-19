import React from 'react';
import Login from '../../components/Login/Login';
import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <div className={styles.wrapper}>
            <Login />
        </div>
    )
}

export default HomePage;