/* eslint-disable react/style-prop-object */
import React from "react";

const InputFile = ({ name, type, placeholder, value, handleChange, hidden }) => (
      <input
        className='components-inputFile'
        type='file'
        placeholder={placeholder}
        name={name}
        value={value}
        hidden={hidden === undefined ? false : true}
        onChange={e => handleChange(e)}
      />
);

export default InputFile;