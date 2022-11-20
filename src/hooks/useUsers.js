import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, setBlockUser } from "../store/async-actions/users";
import { useSearch } from "./useSearch";
import cookie from "js-cookie";

const TOKEN = cookie.get("token");

const config = {
    headers: {
        "Authorization": `Basic ${TOKEN}`
    }
}

export const useUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const [searchUsersQuery, setSearchUsersQuery] = useState("");

    const filterUsers = useSearch(users, searchUsersQuery);

    const handleSearchQuery = ({value}) => setSearchUsersQuery(value);

    const blockUser = (user) => {
        const blocked = !user.isBlocked;
        dispatch(setBlockUser(user.id, blocked, config));
    }

    return {
        filterUsers,
        searchUsersQuery,
        handleSearchQuery,
        blockUser,
        config,
        dispatch,
        fetchAllUsers
    }
}