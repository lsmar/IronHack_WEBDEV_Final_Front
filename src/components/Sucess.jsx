/* eslint-disable jsx-a11y/heading-has-content */
import React, { Fragment } from 'react';

const Sucess = ({ text, img }) => {
  return(
    <Fragment>
    <h2 className='page-sucess-title'>{text}</h2>
    <figure className='page-sucess-figure'>
    <img  className='page-sucess-img' src={img} alt='sucess'/> 
    </figure>
   </Fragment>
  );
}

export default Sucess;