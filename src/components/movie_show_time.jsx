import React from "react";
import "./movie_show_time.css"
import { useEffect } from "react";
import TheaterNameDiaply from "./components/theater_name";
function DisplayShow(props){
  const movie=props.location.state.movie;
  console.log('hai');
  useEffect(() => {
    console.log('DisplayShow component mounted');
    // Add any code you want to run on mount here
    return () => {
      console.log('DisplayShow component unmounted');
      // Add any cleanup code here
    };
  }, [props.location.state.movie]);
  const theaternames=[
    {name:"SPI S2 Cinemas- Perambur - Chennai",address:"114, A, 114 B , 3Rd Floor, Paper Mills Road, Gopal Colony, Perambur, Chennai, Tamil Nadu 600011"},
    {name:"PVR Ampa Skywalk Mall - Aminjikarai",address:"4th Floor, Ampa Skywalk Mall, Nelson Manickam Road, Aminjikarai"},
    {name:"PVR Grand Mall - Velachery",address:"3rd Floor No: 137 Tambaram Velachery Road"},
    {name:"PVR SKLS Galaxy Mall - Red Hills",address:"Survey No. 93/IC/2B, GNT Road, Red Hills"},
    {name:"PVR Aerohub - Chennai",address:"Pvr Cinemas,2Nd Floor, Aerohub East Wing, Mlcp Block, Chennai International Airport, Gst Road, Meenambakkam, Chennai 600027"},
    {name:"PVR Grand Mall - Velachery",address:"3rd Floor No: 137 Tambaram Velachery Road"},
    {name:"PVR Grand Mall - Velachery",address:"3rd Floor No: 137 Tambaram Velachery Road"},
    {name:"PVR Grand Mall - Velachery",address:"3rd Floor No: 137 Tambaram Velachery Road"},
    ]    
  return <div>
    <div className="trailer">
      <p>{movie.name}</p>
    </div>
    <div className="dates">
    <button>
        <p className="date">Fri</p>
        <p className="day">21</p>
      </button>
      </div>
      <div className="theaters">
        {theaternames.map((name)=>{
          return <TheaterNameDiaply name={name}/>
        })}
      </div>
  </div>
}

export default DisplayShow;