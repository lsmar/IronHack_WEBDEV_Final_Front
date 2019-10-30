import React from "react";

const IconsTags = ({ method, text, image_src, value }) => {
  return (
    <div className="each-tag">
    <button onClick={method(value)} className="" name='tags'>
      <img src={image_src} className="img-tags" />
    <p>{text}</p>
    </button>
    </div>
  );
  
};

export default IconsTags;