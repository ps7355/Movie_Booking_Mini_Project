import React from "react";
import './homescreen.css'
import Carousel from "./carousel";
import MovieCard from "./movie_card";

function HomeScreen(){
  return <div className="home">
    <Carousel/>
    <div className="heading">
      <h2>MOVIES</h2>
    </div>
    <div className="sidebar"></div>
    <div className="moviecarddisplay">
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
  </div>
  </div>
}

export default HomeScreen;
