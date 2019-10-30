import React, { Component } from "react";
import {getUser} from "../services/auth";
import Input from "../components/input";
import Button from "../components/Botao";
import Title from "../components/Title";
import apiAxios from "../services/api";
import  Navbar  from "../components/navbar";
import Logo from "../components/Logo";
import TitleAndText from "../components/TitleAndText";

class AddNewProfessor extends Component {
  constructor(props){
    super(props)
    this.state = {
    name: "",
    email: "",
    error: '',
    tolken: ''
    }
    this.handleAddprof = this.handleAddprof.bind(this)
  }

  componentDidMount(){
    this.setState({tolken: getUser()});
  }

  handleAddprof = (e) => {
    e.preventDefault(); 
    const { name, email } = this.state
    if(name === '' || email === ''){
      this.setState({ error: "Preencha nome e email" });
    } else{
      apiAxios.post("/user",{ name, email })
    .then(
      response => {
        this.setState({ name: "", email: "" });
        this.props.history.push("/professorCreated");
      }
    ).catch(e => console.log(e))
    }
    
  };

  handleFormEdit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render(){
    return(
      <div>
        <Logo />
        <form className='page-add-container-user'  onSubmit={this.handleAddprof}>
          <span className='page-add-span'>
        <TitleAndText>CADASTRAR NOVO PROFESSOR</TitleAndText>
        </span>
          {this.state.error && <p>{this.state.error}</p>}
          <Input
            type="text"
            placeholder="Nome "
            name="name"
            handleChange={this.handleFormEdit}
            value= {this.state.name}
          />
          <Input
            type="email"
            placeholder="E-mail"
            name="email"
            handleChange={this.handleFormEdit}
            value= {this.state.email}
          />
          <Button type="submit" label={'Cadastrar'}/>
          <Navbar role={this.state.tolken.role} />
        </form>
      </div>
    )
  }
}

export default AddNewProfessor;