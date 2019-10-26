import React from "react";

const Input = ({ name, type, value, handleChange, hidden }) => (
      <input
        className='components-input'
        type={type}
        placeholder={`${name}`}
        name={name}
        value={value}
        hidden={hidden === undefined ? false : true}
        onChange={e => handleChange(e)}
      />
);

export default Input;