import React from "react";

const TextArea = ({ name, value, placeholder, handleChange}) => {
  return ( <textarea
    className='components-TextArea'
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={e => handleChange(e)}
  /> 
  );
};

export default TextArea;