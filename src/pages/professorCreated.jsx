import React from 'react';
import { Link } from "react-router-dom";
import Button from "../components/Botao";
import Sucess from '../components/Sucess';

const ProfessorCreated = () => {
  return (
    <div className='page-loginSignup-bcg'>
      <div className='page-loginSignup-container'>
        <Sucess text={'Professor adicionado com sucesso!'}  img={'/images/tags/sucess.png'}/>
        < Link to="/newUser" > <Button type="submit" label={'Adicionar novo professor'} /></Link >
        <Link to="/home"><Button type="submit" label={'Ir para home'} /></Link>
      </div>
    </div>
  )
}
export default ProfessorCreated

