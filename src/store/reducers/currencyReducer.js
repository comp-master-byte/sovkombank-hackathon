import { SET_CURRENCY, SET_PRICE, EXCHAGE_BEGIN, EXCHAGE_END, SET_GRAPH, CLEAR_GRAPH, GRAPH_IS_LOADING, GRAPH_LOADED } from "../types/types";

const initialState = {
    currency: [],
    price: "",
    isExchanged: false,
    graph: null,
    isGraphLoading: false
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
        case SET_GRAPH: 
            return {...state, graph: action.payload}
        case CLEAR_GRAPH:
            return {...state, graph: null}
        case GRAPH_IS_LOADING:
            return {...state, isGraphLoading: true}
        case GRAPH_LOADED:
            return {...state, isGraphLoading: false}
        default:
            return state;
    }
}