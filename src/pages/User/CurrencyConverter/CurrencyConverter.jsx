import React from "react";
import styles from "./CurrencyConverter.module.scss";
import { useCurrencyConverter } from "./hooks/useCurrencyConverter";
import { TextField } from '@consta/uikit/TextField';
import { Button } from '@consta/uikit/Button';
import pointer from "../../../images/pointer.svg";

const CurrencyConverter = () => {
    const {
        money,
        handleChange,
        currency,
        isActiveSwitcher,
        toggleToLeft,
        toggleToRight,
        price,
        toExchange
    } = useCurrencyConverter();

    return (
        <div className={styles.wrapper}>
            <section className={styles.bill}>
                <h1>Счет: {currency.map(cur => <span>{cur.accountAmount.toFixed(0)}{cur.currencyName}    </span>)}</h1>
            </section>
            <div className={styles.title}>Конвертер валют</div>
            <section className={styles.section}>
                <div className={styles.leftSectionColumn}>
                    <p>Хочу получить ₽</p>
                    <TextField
                        onChange={handleChange}
                        value={money.toGetAmount && (price * money.toGetAmount).toFixed(0)}
                        type="text"
                        placeholder="0"
                        name="toExchangeAmount"
                        className={styles.leftSectionColumn__input}
                    />
                    <div className={styles.switcher}>
                        <Button
                            form="roundBrick"
                            view={isActiveSwitcher === "left" ? "primary" : "secondary"}
                            label="Доллар"
                            className={styles.switcher__btn}
                            onClick={toggleToLeft}

                        />
                        <Button
                            form="brickRound"
                            label="Рубль"
                            view={isActiveSwitcher === "right" ? "primary" : "secondary"}
                            className={styles.switcher__btn}
                            onClick={toggleToRight}
                        />
                    </div>
                    <p>Хочу обменять $</p>

                    <TextField
                        onChange={handleChange}
                        value={money.toGetAmount}
                        type="text"
                        placeholder="0"
                        name="toGetAmount"
                        className={styles.leftSectionColumn__input}
                    />
                </div>
                <div className={styles.rightSectionColumn}>
                    <p>Сумма обмена</p>
                    <div className={styles.rightSectionColumn__amount}>{money.toGetAmount && (price * money.toGetAmount).toFixed(0)} ₽</div>
                    <div className={styles.rightSectionColumn__img}>
                        <img src={pointer} alt="" />
                    </div>
                    <p>Полученная сумма</p>
                    <div className={styles.rightSectionColumn__amount}>{money.toGetAmount} ₽</div>
                    <div className={styles.footer}>
                        <Button
                            view="primary"
                            label="Обменять"
                            className={styles.rightSectionColumn__btn}
                            onClick={toExchange}
                        />
                        <p>*Точный курс будет определен в момент совершения операции</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CurrencyConverter;