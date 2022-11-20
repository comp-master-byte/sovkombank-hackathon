import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGraphData } from "../../../../store/async-actions/currency";
import cookie from "js-cookie";
import moment from "moment";
import { clearGraph } from "../../../../store/action-creators/currencyReducer";

const TOKEN = cookie.get("token");
const config = {
    headers: {
        "Authorization": `Basic ${TOKEN}`
    }
}

export const useGraph = () => {
    const dispatch = useDispatch();
    const graphData = useSelector(state => state.currency.graph);
    const isGraphLoading = useSelector(state => state.currency.isGraphLoading);

    const [newValue, setNewValue] = useState("")
    const [graphDate, setGraphDate] = useState([]);
    const [graphPrice, setGraphPrice] = useState([]);

    const handleChange = ({value}) => {
        setNewValue(value);
        if(value.length === 3) {
            setGraphDate([]);
            setGraphPrice([]);
            dispatch(fetchGraphData(value, "RUB", config, "week"))
        }
    };

    const fetchGraphForWeek = () => {
        setGraphDate([]);
        setGraphPrice([]);
        if(newValue.length === 3) {
            dispatch(fetchGraphData("USD", "RUB", config, "week"))
        } else {
            dispatch(fetchGraphData(newValue, "RUB", config, "week"))
        }
    }

    const fetchGraphForYear = () => {
        setGraphDate([]);
        setGraphPrice([]);
        if(newValue.length === 3) {
            dispatch(fetchGraphData(newValue, "RUB", config, "year"))
        } else {
            dispatch(fetchGraphData("USD", "RUB", config, "year"))
        }
    }

    const fetchGraphFor3Month = () => {
        setGraphDate([]);
        setGraphPrice([]);
        if(newValue.length === 3) {
            dispatch(fetchGraphData(newValue, "RUB", config, "3month"))
        } else {
            dispatch(fetchGraphData("USD", "RUB", config, "3month"))
        }
    }

    useEffect(() => {
        if(graphData) {
            const argsDate = [];
            const argsPrices = []
            for(let date in graphData) {
                argsDate.push(moment.unix(date).format("DD.MM.YYYY"));
                argsPrices.push(graphData[date].price);
            }
            setGraphDate([...graphDate, ...argsDate]);
            setGraphPrice([...graphPrice, ...argsPrices])
        }
    }, [graphData])

    useEffect(() => {
        dispatch(fetchGraphData("USD", "RUB", config));
        return () => dispatch(clearGraph());
    }, [])

    return {
        graphDate,
        graphPrice,
        fetchGraphForWeek,
        fetchGraphForYear,
        fetchGraphFor3Month,
        isGraphLoading,
        newValue,
        handleChange
    }
}