import React from "react";
import styles from "./Card.module.scss";
import logo from "../../../images/user_logo.png";
import { Button } from "@consta/uikit/Button";
import { useAccount } from "../../../hooks/useAccount";
import { useUsers } from "../../../hooks/useUsers";
import { useLocation } from "react-router-dom";

const Card = ({ request }) => {
    const { handleAcceptUser, handleRejectUser } = useAccount();
    const { blockUser } = useUsers();
    const location = useLocation();

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardImage}>
                <img src={logo} alt="" />
            </div>
            <main className={styles.cardInfo}>
                <p className={styles.cardInfo__name}>{request.name}</p>
                {location.pathname === "/admin/users"
                    ?
                    <Button
                        label={request.isBlocked ? "Разблокировать" : "Заблокировать"}
                        size="s"
                        className={request.isBlocked ? styles.blockedBtn : styles.confirmBtns__reject}
                        view={request.isBlocked ? "secondary" : "primary"}
                        onClick={() => blockUser(request)}
                    />
                    :
                    <div className={styles.confirmBtns}>
                        <Button
                            label="Принять"
                            form="roundBrick"
                            size="xs"
                            onClick={() => handleAcceptUser(request.id)}
                        />
                        <Button
                            label="Отклонить"
                            form="brickRound"
                            size="xs"
                            className={styles.confirmBtns__reject}
                            onClick={() => handleRejectUser(request.id)}
                        />
                    </div>
                }
            </main>
        </div>
    )
}

export default Card;