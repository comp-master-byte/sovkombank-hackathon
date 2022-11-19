import React from "react";
import "./styles/main.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx"
import Accont from "./pages/Admin/Account/Accont";

function App() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin/account" element={<Accont />} />
        </Routes>
    );
}

export default App;