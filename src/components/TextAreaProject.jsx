import React from "react";

const TextAreaProject = ({ name, value, placeholder, handleChange}) => {
  return ( <textarea
    className='components-TextAreaProject'
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={e => handleChange(e)}
  /> 
  );
};

export default TextAreaProject;