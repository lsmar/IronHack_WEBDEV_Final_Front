import React from 'react';

const ButtonRecord = ({label, method, type }) => {
  return (
    <button className="components-buttonRecord" onClick={method} type={type}>{label}</button>
  );
}

export default ButtonRecord;