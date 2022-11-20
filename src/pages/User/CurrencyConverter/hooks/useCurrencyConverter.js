import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { exchangeInProgress, fetchAllCurrency, getActualPrice } from "../../../../store/async-actions/currency";
import cookie from "js-cookie";

const TOKEN = cookie.get("token");
const config = {
    headers: {
        "Authorization": `Basic ${TOKEN}`
    }
}

export const useCurrencyConverter = () => {
    const dispatch = useDispatch();
    const currency = useSelector(state => state.currency.currency);
    const price = useSelector(state => state.currency.price);
    const [money, setMoney] = useState({toExchangeAmount: "", toGetAmount: ""});
    const [isActiveSwitcher, setIsActiveSwitcher] = useState("left");
    const [showDepositInput, setShowDepositInput] = useState(false);
    const [showWithdrawInput, setWithdrawInput] = useState(false);

    const toggleToLeft = () => setIsActiveSwitcher("left");
    const toggleToRight = () => setIsActiveSwitcher("right");
    const toggleDeposit = () => setShowDepositInput(prev => !prev);
    const toggleWithdraw = () => setWithdrawInput(prev => !prev);
    const handleChange = (event) => {
        setMoney({...money, [event.name]: event.value})
        if(event.name === "toGetAmount") {
            dispatch(getActualPrice("USD", "RUB", config))
        }
    };

    const toExchange = () => {
        dispatch(exchangeInProgress("USD", "RUB", Number(money.toGetAmount), config));
    }

    return {
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
    }
}