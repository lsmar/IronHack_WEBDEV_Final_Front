import React from "react";

const TextArea = ({ name, value, method }) => {
  return ( <textarea
    className='components-TextArea'
        name={name}
        value={value}
        onChange={method} 
  /> 
  );
};

export default TextArea;