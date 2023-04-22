import React from "react";
import "./theater_name.css";
function TheaterNameDiaply(props){

        
    return <div className="full">
        <div className="name">
        <p>{props.name.name}</p>
            </div> 
        <div className="address">
        <p>{props.name.address}</p> 
            </div>  
            <div className="divider"></div>
    </div>
}

export default TheaterNameDiaply;