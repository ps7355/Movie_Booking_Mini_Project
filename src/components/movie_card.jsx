import React from "react";
import './homescreen.css'
import { Link } from "react-router-dom";

function MovieCard(props){
    return <div className="moviecard">
        <img src={props.movie.link} alt="" />
        <h2>{props.movie.name}</h2>
        <p>{props.movie.language+" | "+props.movie.rating}</p>
        <Link to={`/select/${props.movie.name}`}>
            <button>Book Ticket</button>
        </Link>
        
    </div>
}

export default MovieCard;