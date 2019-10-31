import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {logout} from "../services/auth";
import Title from './Title';
import Button from './Botao';

const ContaDetalhes = ({name, role}) => {
  return(
    <Fragment>
      <div className="component-conta-container">
      <figure className='component-conta-img'>
      <img  src="/images/Icons/perfil-icon.png" alt="icone de usuário"/>
      </figure>
      <Title>{name}</Title>
      <div className="component-conta-p">
      <p>Instituição: {'instituição no Tolken'}</p>
      <p>Cargo: {role}</p>
      </div>
      <Link to='/'>
      <Button label={'Logout'} method={logout}/>
      </Link>
      </div>

    </Fragment>
  );
}

export default ContaDetalhes;