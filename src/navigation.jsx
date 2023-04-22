import React from "react";
import { Routes,Route } from "react-router-dom";
import App from "./App";
import HomeScreen from "./components/homescreen";
import CheckUser from "./check_aurhentication";
import SignUp from "./signup";
import DisplayShow from "./components/movie_show_time";
import seating from "./components/saeting";

function Navigation(){
    return <Routes>
        <Route path="/" element={<CheckUser/>}></Route>
        <Route path="/auth" element={<App/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/home" element={<HomeScreen/>}></Route>
        <Route path="/select/:movieName" element={<DisplayShow/>}></Route>
        <Route path="/seating" element={<seating/>}></Route>
    </Routes>
}

export default Navigation