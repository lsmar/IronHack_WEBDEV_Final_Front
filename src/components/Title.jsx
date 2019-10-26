import React from 'react';

const Title = (props) => {
  return(
    <h3 className='component-title'>{props.children}</h3>
  );
}

export default Title;