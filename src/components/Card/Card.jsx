import React from "react";
import styles from "./Card.module.scss";
import logo from "../../images/user_logo.png";
import { Button } from "@consta/uikit/Button";
import { useAccount } from "../../hooks/useAccount";

const Card = ({ user }) => {
    const { handleAcceptUser, handleRejectUser } = useAccount();

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardImage}>
                <img src={logo} alt="" />
            </div>
            <main className={styles.cardInfo}>
                <p className={styles.cardInfo__name}>{user.name}</p>
                <div className={styles.confirmBtns}>
                    <Button
                        label="Принять"
                        form="roundBrick"
                        size="xs"
                        onClick={() => handleAcceptUser(user.id)}
                    />
                    <Button
                        label="Отклонить"
                        form="brickRound"
                        size="xs"
                        className={styles.confirmBtns__reject}
                        onClick={() => handleRejectUser(user.id)}
                    />
                </div>
            </main>
        </div>
    )
}

export default Card;