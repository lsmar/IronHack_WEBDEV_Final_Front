import React from 'react';

const iconDelete = ({method}) => {
  return(
    <button onClick={method}><img src="/test.png" alt="test"/></button>
  );
}

export default iconDelete;