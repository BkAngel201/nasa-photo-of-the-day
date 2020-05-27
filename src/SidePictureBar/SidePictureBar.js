import React, { useState } from "react";
import axios from 'axios'
import "./SidePictureBar.css";

function SidePictureBar(props) {
    const [picturesInfo,setPicturesInfo] = useState(props.InfoPicture)
    const weeksToShow = [
        ["2020-5-26", "2020-5-25", "2020-5-24", "2020-5-23", "2020-5-22", "2020-5-21"],
        ["2020-4-11", "2020-4-10", "2020-4-9", "2020-4-8", "2020-4-7", "2020-4-6"],
        ["2020-3-6", "2020-3-5", "2020-3-4", "2020-3-3", "2020-3-2", "2020-3-1"],
        ["2020-2-16", "2020-2-15", "2020-2-14", "2020-2-13", "2020-2-12", "2020-2-11"],
    ]

    return (
        <div className="side_picture_bar">
            {
            picturesInfo.map((el, index) => {
               return <div className="picture_list_item"><img src={el.data.url}  onClick={()=>{props.PictureToShow(index)}}/></div>
            })
            }
            
           
        </div>
    )
}

export default SidePictureBar;
