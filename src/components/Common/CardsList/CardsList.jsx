import React from "react";
import styles from "./CardsList.module.scss";
import Card from "../Card/Card";

const CardsList = ({ requests, isUser }) => {
    return (
        <div className={styles.cardsList}>
            {requests.map(request =>
                <Card key={request.id} request={request} isUser />
            )}
        </div>
    )
}

export default CardsList;