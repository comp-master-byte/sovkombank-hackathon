import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchAllUsersRegistration, registrationIsAcceptUser} from "../store/async-actions/users";
import { useSearch } from "./useSearch";
import cookie from "js-cookie";

const TOKEN = cookie.get("token");

const config = {
    headers: {
        "Authorization": `Basic ${TOKEN}`
    }
}

export const useAccount = () => {
    const dispatch = useDispatch();
    const requests = useSelector(state => state.users.requests);

    const [searchQuery, setSearchQuery] = useState("");

    const usersQuery = useSearch(requests, searchQuery);

    const handleSearchQuery = ({value}) => setSearchQuery(value);

    const handleAcceptUser = (requestId) => {
        dispatch(registrationIsAcceptUser(requestId, true, config))
    };
    const handleRejectUser = (requestId) => {
        dispatch(registrationIsAcceptUser(requestId, false, config))
    };

    return {
        requests,
        usersQuery,
        handleAcceptUser,
        handleRejectUser,
        searchQuery, 
        handleSearchQuery,
        config,
        dispatch,
        fetchAllUsersRegistration
    }
}