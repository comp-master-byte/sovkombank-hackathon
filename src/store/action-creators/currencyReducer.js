import { EXCHAGE_BEGIN, EXCHAGE_END, SET_CURRENCY, SET_PRICE } from "../types/types";

export const setCurrency = (payload) => ({type: SET_CURRENCY, payload});
export const setPrice = (payload) => ({type: SET_PRICE, payload});
export const exchangeBegin = () => ({type: EXCHAGE_BEGIN});
export const exchangeEnd = () => ({type: EXCHAGE_END});