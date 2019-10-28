import React from 'react';
import { Link } from "react-router-dom";
import Button from "../components/Botao";
import Title from "../components/Title";

const ProfessorCreated = () => {
  return(
    <div>
        <Title>Professor adicionado com sucesso!</Title>
          <Link to="/newUser"><Button type="submit" label={'Adicionar novo professor'}/></Link>
          <Link to="/home"><Button type="submit" label={'Ir para home'}/></Link>
    </div>

  )
}
export default ProfessorCreated