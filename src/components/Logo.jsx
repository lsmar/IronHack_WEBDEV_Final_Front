import React from 'react';
import Title from './Title';

const Logo = ({ title }) => {
  return(
    <div className='components-logo-container'>
    <figure className='components-logo'>
    <img className='components-logo-img' src="/images/logo_testes/LOGO/Logo.png" alt="Logo"/>
    </figure>
    <Title>{title}</Title>
    </div>
  );
}

export default Logo;

