import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./MainPicture.css";
import PictureInfo from "./PictureInfo"

function MainPicture(props) {
    const [pictOfDay, setPictOfDay] = useState("")


    useEffect(() => {
        setPictOfDay(props.PictureInfo[props.PictureToShow].data)
    },[props.PictureToShow])
    
      
    if(pictOfDay == '') {
        return "Loading..."
    } else {
        return (
            <div className="main_picture">
                <img src={`${pictOfDay.url}`} />
                <PictureInfo info={pictOfDay}/>
            </div>
        );
    }
}

export default MainPicture;
