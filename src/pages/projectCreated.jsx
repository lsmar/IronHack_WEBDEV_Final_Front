import React from 'react';
import { Link } from "react-router-dom";
import Button from "../components/Botao";
import Title from "../components/Title";

const ProjectCreated = () => {
  return(
    <div>
        <Title>Projeto criado com sucesso!</Title>
          <Link to="/newProject"><Button type="submit" label={'Criar novo projeto'}/></Link>
          <Link to="/home"><Button type="submit" label={'Ir para home'}/></Link>
    </div>

  )
}
export default ProjectCreated