import React, { useState } from "react";
import "./seating.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Seating() {
  const [seatingStates, setSeatingStates] = useState(Array(100).fill(false));
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();
  const{state}=useLocation();

  // Set a random subset of seats as unavailable
  useEffect(() => {
    const randomUnavailableSeats = new Set();
    while (randomUnavailableSeats.size < 70) {
      const seatIndex = Math.floor(Math.random() * 527);
      randomUnavailableSeats.add(seatIndex);
    }
    const newSeatingStates = [...seatingStates];
    randomUnavailableSeats.forEach((seatIndex) => {
      newSeatingStates[seatIndex] = "unavailable";
    });
    setSeatingStates(newSeatingStates);
  }, []);

  const handleClick = (index) => {
    if (seatingStates[index] !== "unavailable") {
      const newSeatingStates = [...seatingStates];
      newSeatingStates[index] = !newSeatingStates[index];
      setSeatingStates(newSeatingStates);

      const newSelectedSeats = [...selectedSeats];
      if (newSeatingStates[index]) {
        newSelectedSeats.push(index);
      } else {
        const seatIndex = newSelectedSeats.indexOf(index);
        if (seatIndex > -1) {
          newSelectedSeats.splice(seatIndex, 1);
        }
      }
      setSelectedSeats(newSelectedSeats);
    }
  };

  const seatingElements = [];
  for (let i = 1; i < 528; i++) {
    seatingElements.push(
      <div
        key={i}
        className={`s ${
          seatingStates[i] === true ? "clicked" : seatingStates[i]
        }`}
        onClick={() => handleClick(i)}
      ></div>
    );
  }
  function go(){
    navigate("/conformation",{
    state:{
      name:state.na,
      theater:state.th,
      address:state.ad,
      time:state.mt,
      date:state.md,
      seatno:selectedSeats,
      totalseats:selectedSeats.length,
    }}
    );
  }

  return (
    <div>
      <div className="screen">{seatingElements}</div>
      <div onClick={go} className="continue">
        <p>Continue</p>
      </div>
      <div className="seatno">
        <p>{selectedSeats.join(", ")}</p>
      </div>
      <div className="amount">
        <p>{"Rs  "+ selectedSeats.length*150}</p>
      </div>
    </div>
  );
}

export default Seating;

 