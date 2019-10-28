import React from 'react';

// SUBSTITUIR <a> POR <Link>
// ADICIONAR IMAGENS DENTRO DOS <Link>

const Navbar = ({role}) => {
  return(
    <nav className='component-navbar-nav'>
      <ul className='component-navbar-ul'>
        {/* {
          role === 'COORDINATOR' ?
          <li><a href="https://google.com.br">1</a></li> :
          <li> <a href="https://google.com.br">PROFESSOR</a></li>
        } */}
        <li> <a href="https://google.com.br"><img className='component-navbar-img' src="/images/Icons/Home.png" alt="home"/></a></li>
        <li> <a href="https://google.com.br"><img className='component-navbar-img' src="/images/Icons/Conta.png" alt="Conta"/></a></li>
        <li> <a href="https://google.com.br"><img className='component-navbar-img' src="/images/Icons/Professor.png" alt="+professor"/></a></li>
        <li> <a href="https://google.com.br"><img className='component-navbar-img' src="/images/Icons/Projetos.png" alt="+projetos"/></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;