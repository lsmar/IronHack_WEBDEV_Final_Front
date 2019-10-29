import React from 'react';
import { Link } from "react-router-dom";

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
        <li> <Link  to="/project"><img className='component-navbar-img' src="/images/Icons/Home.png" alt="home"/></Link></li>
        <li> <Link  to="/home"><img className='component-navbar-img' src="/images/Icons/Conta.png" alt="Conta"/></Link></li>
        <li> <Link  to="/newUser"><img className='component-navbar-img' src="/images/Icons/Professor.png" alt="+professor"/></Link></li>
        <li> <Link  to="/newProject"><img className='component-navbar-img' src="/images/Icons/Projetos.png" alt="+projetos"/></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;