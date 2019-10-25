import React from 'react';
import '../Gabriel.css'

// SUBSTITUIR <a> POR <Link>
// ADICIONAR IMAGENS DENTRO DOS <Link>

const navbar = ({role}) => {
  return(
    <nav className='component-navbar-nav'>
      <ul className='component-navbar-ul'>
        {
          role === 'COORDINATOR' ?
          <li><a href="https://google.com.br">1</a></li> :
          <li> <a href="https://google.com.br">PROFESSOR</a></li>
        }
        <li> <a href="https://google.com.br">1</a></li>
        <li> <a href="https://google.com.br">2</a></li>
        <li> <a href="https://google.com.br">3</a></li>
      </ul>
    </nav>
  );
}

export default navbar;