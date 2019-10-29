import React, {Component} from "react";
import { Link } from "react-router-dom";
import Button from "../components/Botao";
import Title from "../components/Title";
import apiAxios from "../services/api";

class ProjectDeleted extends Component{
  constructor(props){
    super(props)
    this.state={
      projectName: "",
    }
    this.deleteOne = this.deleteOne.bind(this);
  }

  componentDidMount(){
    this.deleteOne();
  }
  deleteOne = () => {
    apiAxios
    .delete(`/project/${this.props.match.params.id}`)
    .then(project => (
      this.setState({projectName:project.data.name})
    ))
    .catch(e => console.log(e));
  }
    render(){
      return( 
      <div>
        {this.state.projectName!==''?<Title>Projeto foi deletado com sucesso!</Title>:<Title>Nenhum projeto foi encontrado</Title>}
        <Link to="/newProject">
          <Button type="submit" label={"Criar novo projeto"} />
        </Link>
        <Link to="/project">
          <Button type="submit" label={"Ir para home"} />
        </Link>
      </div>
      )
    }
};
export default ProjectDeleted;
