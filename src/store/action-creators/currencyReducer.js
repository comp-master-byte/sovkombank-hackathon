import { CLEAR_GRAPH, EXCHAGE_BEGIN, EXCHAGE_END, GRAPH_IS_LOADING, GRAPH_LOADED, SET_CURRENCY, SET_GRAPH, SET_PRICE } from "../types/types";

export const setCurrency = (payload) => ({type: SET_CURRENCY, payload});
export const setPrice = (payload) => ({type: SET_PRICE, payload});
export const exchangeBegin = () => ({type: EXCHAGE_BEGIN});
export const exchangeEnd = () => ({type: EXCHAGE_END});
export const setGraph = (payload) => ({type: SET_GRAPH, payload});
export const clearGraph = () => ({type: CLEAR_GRAPH});
export const graphIsLoading = () => ({type: GRAPH_IS_LOADING});
export const graphLoaded = () => ({type: GRAPH_LOADED});