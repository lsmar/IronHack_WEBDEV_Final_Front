import React from 'react';

const ButtonBlue = ({label, method, type }) => {
  return (
    <button className="components-buttonBlue" onClick={method} type={type}>{label}</button>
  );
}

export default ButtonBlue;

