import React from "react";
import { Routes,Route } from "react-router-dom";
import App from "./App";
import HomeScreen from "./components/homescreen";
import CheckUser from "./check_aurhentication";
import SignUp from "./signup";
import DisplayShow from "./exp";

function Navigation(){
    return <Routes>
        <Route path="/" element={<CheckUser/>}></Route>
        <Route path="/auth" element={<App/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/home" element={<HomeScreen/>}></Route>
        <Route path="/select/:movieName" element={<DisplayShow/>}></Route>
    </Routes>
}

export default Navigation