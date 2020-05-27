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
          {(props.info.copyright !== undefined) ? <span>Copyright: {props.info.copyright}</span> : <span>Copyright: Unknown</span>}
          
      </div>
  );
}

export default PictureInfo;
