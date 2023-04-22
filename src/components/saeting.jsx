import React, { useState } from "react";
import "./seating.css";
import { useEffect } from "react";
function Seating() {
    const [seatingStates, setSeatingStates] = useState(Array(100).fill(false));
  
    // Set a random subset of seats as unavailable
    useEffect(() => {
      const randomUnavailableSeats = new Set();
      while (randomUnavailableSeats.size < 50) {
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
        }
      };
  
    const seatingElements = [];
    for (let i = 0; i < 527; i++) {
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
  
    return <div className="screen">{seatingElements}</div>;
  }
  
  export default Seating;