import React from 'react';
import { Link } from "react-router-dom";

// SUBSTITUIR <a> POR <Link>
// ADICIONAR IMAGENS DENTRO DOS <Link>
// A

const Navbar = ({role, url}) => {
return(
    <nav className='component-navbar-nav'>
      <ul className='component-navbar-ul'>
        {url === '/project' ? <li> <Link  to="/project"><img className='component-navbar-img' src="/images/Icons/Icones-azul/Home-ativo.png" alt="home"/></Link></li> : <li> <Link  to="/project"><img className='component-navbar-img' src="/images/Icons/Home.png" alt="home"/></Link></li> }
        {url === '/conta' ? <li> <Link  to="/conta"><img className='component-navbar-img' src="/images/Icons/Icones-azul/Conta-ativo.png" alt="Conta"/></Link></li> : <li> <Link  to="/conta"><img className='component-navbar-img' src="/images/Icons/Conta.png" alt="Conta"/></Link></li>}
        { 
          role !== 'COORDINATOR' ? null : url === '/newUser' ? <li> <Link  to="/newUser"><img className='component-navbar-img' src="/images/Icons/Icones-azul/Professor-ativo.png" alt="+professor"/></Link></li> : <li> <Link  to="/newUser"><img className='component-navbar-img' src="/images/Icons/Professor.png" alt="+professor"/></Link></li>   

        }
        {
          role === 'COORDINATOR' ? null : url === '/project/my' ? <li> <Link  to="/project/my"><img className='component-navbar-img' src="/images/Icons/Icones-azul/meus-projetos-ativo.png" alt="+professor"/></Link></li> : <li> <Link  to="/project/my"><img className='component-navbar-img' src="/images/Icons/meus_projetos.png" alt="+professor"/></Link></li>
        }

        {url === '/newProject' ? <li> <Link  to="/newProject"><img className='component-navbar-img' src="/images/Icons/Icones-azul/Projetos-ativo.png" alt="+projetos"/></Link></li> : <li> <Link  to="/newProject"><img className='component-navbar-img' src="/images/Icons/Projetos.png" alt="+projetos"/></Link></li>}
      </ul>
    </nav>
  );
}

export default Navbar;