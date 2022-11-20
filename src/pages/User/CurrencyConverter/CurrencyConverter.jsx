import React, { useEffect } from "react";
import styles from "./CurrencyConverter.module.scss";
import { useCurrencyConverter } from "./hooks/useCurrencyConverter";
import { TextField } from '@consta/uikit/TextField';
import { Button } from '@consta/uikit/Button';
import pointer from "../../../images/pointer.svg";
import history from "../../../images/history.svg";

const CurrencyConverter = () => {
    const {
        money,
        handleChange,
        currency,
        isActiveSwitcher,
        toggleToLeft,
        toggleToRight,
        price,
        toExchange,
        dispatch,
        fetchAllCurrency,
        config,
        showDepositInput,
        toggleDeposit,
        showWithdrawInput,
        toggleWithdraw
    } = useCurrencyConverter();

    useEffect(() => {
        dispatch(fetchAllCurrency(config))
    }, [config])

    return (
        <div className={styles.wrapper}>
            <section className={styles.bill}>
                <h1>Счет: {currency.map(cur => <span>{cur.accountAmount.toFixed(0)}{cur.currencyName}    </span>)}</h1>
            </section>
            <div className={styles.actionBtns}>
                <Button
                    label="Пополнить"
                    onClick={toggleDeposit}
                />
                {showDepositInput ?
                    <TextField
                        type="text"
                        placeholder="Поплнить"
                    />
                    : <></>
                }
                <Button
                    label="Снять"
                    className={styles.actionBtns__take}
                    onClick={toggleWithdraw}
                />
                {showWithdrawInput ?
                    <TextField
                        type="text"
                        placeholder="Снять"
                    />
                    : <></>
                }
                <div className={styles.justFlex}>
                    <div>
                        <img src={history} alt="" />
                    </div>
                    <div style={{ marginLeft: 10 }}>История операций</div>
                </div>
            </div>
            <div className={styles.title}>Конвертер валют</div>
            <section className={styles.section}>
                <div className={styles.leftSectionColumn}>
                    <p>Хочу обменять ₽</p>
                    <TextField
                        onChange={handleChange}
                        value={money.toGetAmount && (price * money.toGetAmount).toFixed(0)}
                        type="text"
                        placeholder="0 ₽"
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
                    <p>Хочу получить $</p>

                    <TextField
                        onChange={handleChange}
                        value={money.toGetAmount}
                        type="text"
                        placeholder="0 $"
                        name="toGetAmount"
                        className={styles.leftSectionColumn__input}
                    />
                </div>
                <div className={styles.rightSectionColumn}>
                    <p>Сумма обмена</p>
                    <div className={styles.rightSectionColumn__amount}>{money.toGetAmount && (price * money.toGetAmount).toFixed(0) || 0} ₽</div>
                    <div className={styles.rightSectionColumn__img}>
                        <img src={pointer} alt="" />
                    </div>
                    <p>Полученная сумма</p>
                    <div className={styles.rightSectionColumn__amount}>{money.toGetAmount || 0} $</div>
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