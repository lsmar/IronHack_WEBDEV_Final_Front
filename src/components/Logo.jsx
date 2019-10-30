import React from 'react';
import Title from './Title';

const Logo = ({ title }) => {
  return(
    <div className='components-logo-container'>
    <figure className='components-logo'>
    <img className='components-logo-img' src="/images/logo_testes/LOGO/Logo_white.png" alt="Logo"/>
    </figure>
    </div>
  );
}

export default Logo;

