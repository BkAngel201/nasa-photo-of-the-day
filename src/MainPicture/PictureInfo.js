import React from "react";
import "./PictureInfo.css";

function PictureInfo (props) {
  return (
      <div className="picture_info">
        <div className="info_header">
          <h3>{props.info.title}</h3>
          <p>{props.info.date}</p>
        </div>
          
          <p>{props.info.explanation}</p>
          
          <span>Picture By: {props.info.copyright}</span>
      </div>
  );
}

export default PictureInfo;
