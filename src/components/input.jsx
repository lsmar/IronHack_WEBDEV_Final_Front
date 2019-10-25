import React from "react";

const Input = ({ name, type, value, handleChange }) => (
      <input
        className='components-input'
        type={type}
        placeholder={`${name}`}
        name={name}
        value={value}
        onChange={e => handleChange(e)}
      />
);

export default Input;