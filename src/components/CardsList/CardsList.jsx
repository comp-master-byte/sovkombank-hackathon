import React from "react";
import styles from "./CardsList.module.scss";
import Card from "../Card/Card";

const CardsList = ({ users }) => {
    return (
        <div className={styles.cardsList}>
            {users.map(user =>
                <Card key={user.id} user={user} />
            )}
        </div>
    )
}

export default CardsList;