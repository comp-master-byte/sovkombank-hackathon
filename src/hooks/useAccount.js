import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchAllUsersRegistration, registrationIsAcceptUser} from "../store/async-actions/users";
import { useSearch } from "./useSearch";

export const useAccount = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    const [searchQuery, setSearchQuery] = useState("");

    const usersQuery = useSearch(users, searchQuery);

    const handleSearchQuery = ({value}) => setSearchQuery(value);

    const handleAcceptUser = (userId) => {
        dispatch(registrationIsAcceptUser(userId, true))
    };
    const handleRejectUser = (userId) => {
        dispatch(registrationIsAcceptUser(userId, false))
    };

    useEffect(() => {
        dispatch(fetchAllUsersRegistration())
    }, [])

    return {
        users,
        usersQuery,
        handleAcceptUser,
        handleRejectUser,
        searchQuery, 
        handleSearchQuery
    }
}