import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player"
import "./MainPicture.css";
import PictureInfo from "./PictureInfo"

function MainPicture(props) {
    const [pictOfDay, setPictOfDay] = useState("")


    useEffect(() => {
        setPictOfDay(props.PictureToShow)
    },[props.PictureToShow])
    
      
    if(pictOfDay == '') {
        return "Loading..."
    } else if(pictOfDay.media_type === "image"){
        return (
            <div className="main_picture">
                <img src={`${pictOfDay.url}`} />
                <PictureInfo info={pictOfDay}/>
            </div>
        );
    } else {
        return (
            <div className="main_picture">
                <ReactPlayer 
                    url={pictOfDay.url} 
                    width="100%"
                    height="557px"
                />
                <PictureInfo info={pictOfDay}/>
            </div>
        );
    }
}

export default MainPicture;
