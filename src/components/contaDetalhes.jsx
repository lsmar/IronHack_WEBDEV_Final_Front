import React, {Fragment} from 'react';
import Title from './Title'
import Button from './Botao'

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
      <Button label={'Sair'}/>
      </div>

    </Fragment>
  );
}

export default ContaDetalhes;