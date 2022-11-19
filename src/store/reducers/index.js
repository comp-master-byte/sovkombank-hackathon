import { combineReducers } from "redux";
import { registerReducer } from "./registerReducer";
import {loginReducer} from "./loginReducer"
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
    users: usersReducer
});