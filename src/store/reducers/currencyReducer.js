import { SET_CURRENCY, SET_PRICE, EXCHAGE_BEGIN, EXCHAGE_END } from "../types/types";

const initialState = {
    currency: [],
    price: "",
    isExchanged: false
}

export const currencyReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENCY:
            return {...state, currency: action.payload}
        case SET_PRICE:
            return {...state, price: action.payload}
        case EXCHAGE_BEGIN:
            return {...state, isExchanged: true}
        case EXCHAGE_END:
            return {...state, isExchanged: false}
        default:
            return state;
    }
}