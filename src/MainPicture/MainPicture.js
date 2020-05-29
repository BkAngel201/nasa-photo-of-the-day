import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player"
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
            <div className="main_picture flex w-full relative bg-gray-500 h-screen">
                <img className="flex w-auto m-auto" src={`${pictOfDay.url}`} />
                <PictureInfo info={pictOfDay}/>
            </div>
        );
    } else {
        return (
            <div className="main_picture flex w-full relative bg-gray-500 h-screen">
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
