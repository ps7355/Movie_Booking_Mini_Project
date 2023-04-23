import React from "react";
import { Routes,Route } from "react-router-dom";
import App from "./App";
import HomeScreen from "./components/homescreen";
import CheckUser from "./check_aurhentication";
import SignUp from "./signup";
import DisplayShow from "./components/movie_show_time";
import Seating from "./components/saeting";
import Conformation from "./components/conformation";

function Navigation(){
    return <Routes>
        <Route path="/" element={<CheckUser/>}></Route>
        <Route path="/auth" element={<App/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/home" element={<HomeScreen/>}></Route>
        <Route path="/select/:movieName" element={<DisplayShow/>}></Route>
        <Route path="/seating" element={<Seating/>}></Route>
        <Route path="/conformation" element={<Conformation/>}></Route>
    </Routes>
}

export default Navigation