import React from "react";

function PictureInfo (props) {
  return (
      <div className="picture_info absolute bottom-0 right-0 left-0 flex flex-col text-left text-white">
        <div className="flex justify-between">
          <h3 className="mb-5 text-2xl leading-none">{props.info.title}</h3>
          <p className="text-right">{props.info.date}</p>
        </div>
          
          <p>{props.info.explanation}</p>
          {(props.info.copyright !== undefined) ? <span className="text-right">Copyright: {props.info.copyright}</span> : <span className="text-right">Copyright: Unknown</span>}
          
      </div>
  );
}

export default PictureInfo;
