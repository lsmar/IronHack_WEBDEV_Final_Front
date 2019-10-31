import React from 'react';

const TitleAndText = (props) => {
  return(
    <h3 className='component-titleAndText'>{props.children}</h3>
  );
}

export default TitleAndText;