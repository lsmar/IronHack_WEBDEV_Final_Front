import React from 'react';
import { Link } from "react-router-dom";
import Button from "../components/Botao";
import Sucess from '../components/Sucess';

const ProjectCreated = (props) => {
  let message = ''
  if(props.history.location.pathname === '/projectCreated') message = 'criado'
  if(props.history.location.pathname === '/projectEdited') message = 'atualizado'
  return(
    <div className='page-loginSignup-bcg'>
      <div className='page-loginSignup-container'>
        <Sucess text={`Projeto ${message} com sucesso!`} img={'/images/imagensAndBcg/book.png'}/>
          <Link to="/newProject"><Button type="submit" label={'Criar novo projeto'}/></Link>
          <Link to="/project"><Button type="submit" label={'Ir para home'}/></Link>
          </div>
    </div>
  )
}
export default ProjectCreated