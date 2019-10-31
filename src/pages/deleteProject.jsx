import React, {Component} from "react";
import { Link } from "react-router-dom";
import Button from "../components/Botao";
import apiAxios from "../services/api";
import Logo from "../components/Logo";
import Navbar from "../components/navbar";
import TitleAndText from "../components/TitleAndText";
import Loader from "../components/loader"

class ProjectDeleted extends Component{
  constructor(props){
    super(props)
    this.state={
      projectName: "",
      canDelete: false,
      loader: true
    }
    this.deleteOne = this.deleteOne.bind(this);
    this.getOne = this.getOne.bind(this);
  }

  componentDidMount(){
    this.getOne();
  }

  getOne = () => {
    apiAxios
    .get(`/project/${this.props.match.params.id}`)
    .then(project => (
      this.setState({projectName:project.data.name, loader: false})
    ))
    .catch(e => console.log(e));
  }

  deleteOne = () => {
    apiAxios
    .delete(`/project/${this.props.match.params.id}`)
    .then(project => (
      this.setState({projectName:project.data.name, canDelete:true})
    ))
    .catch(e => console.log(e));
  }

    render(){
      const deletedMessege = (<div>
        <Logo />
        <span className='page-delAndEdit-container'>
        {this.state.projectName!==''?<TitleAndText>PROJETO DELETADO COM SUCESSO!</TitleAndText>:<TitleAndText>NENHUM PROJETO FOI ENCONTRADO!</TitleAndText>}
        <figure className='page-sucess-figure'>
         <img  className='page-sucess-img' src='/images/ImagensAndBcg/delete-icon.png'alt='sucess'/> 
        </figure>
        <Link to="/newProject">
          <Button type="submit" label={"Criar novo projeto"} />
        </Link>
        <Link to="/project">
          <Button type="submit" label={"Ir para home"} />
        </Link>
        </span>
        <Navbar />
      </div>);

      const messageConfirmation = (<div>
        <Logo />
        {this.state.loader !== true ? <span className='page-delAndEdit-container'>
        {this.state.projectName!==''?<TitleAndText>Apagar o projeto "{this.state.projectName}"</TitleAndText>:null}
        <Button type="submit" method={this.deleteOne} label={"Sim"} />
        <Link to="/project">
          <Button type="submit" label={"Nao, retornar para a home"} />
        </Link>
        </span> : null}
        {this.state.loader === true ? <Loader /> : null}
        <Navbar />
      </div>);

      return( !this.state.canDelete ? messageConfirmation : deletedMessege )
    }
};
export default ProjectDeleted;
