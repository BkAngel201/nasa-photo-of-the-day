import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./SidePictureBar.css";

function SidePictureBar(props) {
    const [picturesInfo, setPicturesInfo] = useState('')
    const weeksToShow = [
        ["2020-5-26", "2020-5-25", "2020-5-24", "2020-5-23", "2020-5-22", "2020-5-21"],
        ["2020-4-11", "2020-4-10", "2020-4-9", "2020-4-8", "2020-4-7", "2020-4-6"],
        ["2020-3-6", "2020-3-5", "2020-3-4", "2020-3-3", "2020-3-2", "2020-3-1"],
        ["2020-2-16", "2020-2-15", "2020-2-14", "2020-2-13", "2020-2-12", "2020-2-11"],
    ]
useEffect(() => {setPicturesInfo(props.InfoPicture)},[props.InfoPicture])
    if(picturesInfo !== '')
    {
        return (
            <div className="side_picture_bar">
                <select onChange={(e) => {
                    props.SetDayToShow(weeksToShow[e.target.value])
                }}>
                    {
                    weeksToShow.map((el, index) => {
                        return <option value={index}>{`${el[0]} to ${el[el.length-1]}`}</option>
                    })
                    }
                </select>
                {
                picturesInfo.map((el, index) => {
                    if(el.data.media_type === "image") {
                        return <div className="picture_list_item"><img src={el.data.url}  onClick={()=>{props.PictureToShow(el.data)}}/></div>
                    } else {
                        return <div className="picture_list_item"><img src="videoPlayback.png"  onClick={()=>{props.PictureToShow(el.data)}}/></div>
                    }
                   
                })
                }
                
               
            </div>
        )
    } else {
        return <></>
    }


}

export default SidePictureBar;
