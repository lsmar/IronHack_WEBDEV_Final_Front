import React, {Component} from "react";
import { Link } from "react-router-dom";
import Button from "../components/Botao";
import apiAxios from "../services/api";
import Logo from "../components/Logo";
import Navbar from "../components/navbar";
import TitleAndText from "../components/TitleAndText";

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
        <Logo />
        <span className='page-delAndEdit-container'>
        {this.state.projectName!==''?<TitleAndText>Projeto foi deletado com sucesso!</TitleAndText>:<TitleAndText>Nenhum projeto foi encontrado</TitleAndText>}
        <figure className='page-sucess-figure'>
         <img  className='page-sucess-img' src='/images/ImagensAndBcg/delete-icon.png'alt='sucess'/> 
        </figure>
        <Link to="/newProject">
          <Button type="submit" label={"Criar novo projeto"} />
        </Link>
        <Link to="/home">
          <Button type="submit" label={"Ir para home"} />
        </Link>
        </span>
        <Navbar />
      </div>
      )
    }
};
export default ProjectDeleted;
