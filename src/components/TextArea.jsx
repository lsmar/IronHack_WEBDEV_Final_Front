import React from "react";

const TextArea = ({ name, type, value, method }) => (
      <input
        type={type}
        name={name}
        value={value}
        onChange={method} 
      />
);

export default TextArea;