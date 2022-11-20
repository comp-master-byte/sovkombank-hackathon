import axios from "axios";
import { exchangeBegin, exchangeEnd, graphIsLoading, graphLoaded, setCurrency, setGraph, setPrice } from "../action-creators/currencyReducer";

export const fetchAllCurrency = (config) => {
    return async dispatch => {
        try {
            const response = await axios.get('http://194.58.123.176:8000/api/account/my', config)
            dispatch(setCurrency(response.data));
        } catch(error) {
            console.log(error);
        }
    }
}

export const getActualPrice = (target, source, config) => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://194.58.123.176:8000/api/currency/exchange?target=${target}&source=${source}`, config)
            dispatch(setPrice(response.data.price));
        } catch(error) {
            console.log(error);
        }
    }
}

export const exchangeInProgress = (target, source, amount, config) => {
    return async dispatch => {
        try {
            dispatch(exchangeBegin());
            const response = await axios.post(`http://194.58.123.176:8000/api/money/buy?target=${target}&source=${source}&amount=${amount}`, "" ,config);
            if(response.status === 200) {
                dispatch(exchangeEnd());
            }
        } catch(error) {
            console.log(error);
        }
    }
}

export const fetchGraphData = (target, source, config, date = "week") => {
    return async dispatch => {
        try {
            dispatch(graphIsLoading());
            const response = await axios.get(`http://194.58.123.176:8000/api/currency/frame/${date}?target=${target}&source=${source}`,config);
            dispatch(setGraph(response.data));
            dispatch(graphLoaded());
        } catch(error) {
            console.log(error);
        }
    }
}