import React, { useState, useEffect } from "react";

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
            <div className="side_picture_bar flex flex-col mr-2">
                <select onChange={(e) => {
                    props.SetDayToShow(weeksToShow[e.target.value])
                }} className="p-2 border-solid border-2 border-red-600 bg-gray-500">
                    {
                    weeksToShow.map((el, index) => {
                        return <option value={index}>{`${el[0]} to ${el[el.length-1]}`}</option>
                    })
                    }
                </select>
                {
                picturesInfo.map((el, index) => {
                    return <div className="picture_list_item w-full border-solid border-2 border-red-600 overflow-hidden mt-2"><img className="w-full min-h-full" src={el.data.media_type === "image"? el.data.url : "videoPlayback.png" }  onClick={()=>{props.PictureToShow(el.data)}}/></div>
                })
                }
                
               
            </div>
        )
    } else {
        return <></>
    }


}

export default SidePictureBar;
