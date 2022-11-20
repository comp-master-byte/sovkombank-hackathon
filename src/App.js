import React from "react";
import "./styles/main.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx"
import Accont from "./pages/Admin/Account/Accont";
import AdminLayout from "./components/AdminLayout/AdminLayout";
import Users from "./pages/Admin/Users/Users";
import CurrencyConverter from "./pages/User/CurrencyConverter/CurrencyConverter";
import UserLayout from "./components/UserLayout/UserLayout";

function App() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin/account" element={<Accont />} />
                <Route path="/admin/users" element={<Users />} />
            </Route>
            <Route path="/user" element={<UserLayout />}>
                <Route path="/user/currencyConverter" element={<CurrencyConverter />} />
            </Route>
        </Routes>
    );
}

export default App;