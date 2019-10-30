import React from 'react';
import { Link } from "react-router-dom";

// SUBSTITUIR <a> POR <Link>
// ADICIONAR IMAGENS DENTRO DOS <Link>

const Navbar = ({role, url}) => {
  return(
    <nav className='component-navbar-nav'>
      <ul className='component-navbar-ul'>
        {url == '/project' ? null : <li> <Link  to="/project"><img className='component-navbar-img' src="/images/Icons/Home.png" alt="home"/></Link></li> }
        {url == '/conta' ? null : <li> <Link  to="/conta"><img className='component-navbar-img' src="/images/Icons/Conta.png" alt="Conta"/></Link></li>}
        {
          url === '/project/my' || url === '/newUser' ? null :
          (role === 'COORDINATOR' ?
          <li> <Link  to="/newUser"><img className='component-navbar-img' src="/images/Icons/Professor.png" alt="+professor"/></Link></li>:
          <li> <Link  to="/project/my"><img className='component-navbar-img' src="/images/Icons/meus_projetos.png" alt="Meus projetos"/></Link></li>)

        }
        {url === '/newProject' ? null : <li> <Link  to="/newProject"><img className='component-navbar-img' src="/images/Icons/Projetos.png" alt="+projetos"/></Link></li>}
      </ul>
    </nav>
  );
}

export default Navbar;