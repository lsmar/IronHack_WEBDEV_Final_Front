import React from "react";

const TextArea = ({ name, value, placeholder, method }) => {
  return ( <textarea
    className='components-TextArea'
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={method} 
  /> 
  );
};

export default TextArea;