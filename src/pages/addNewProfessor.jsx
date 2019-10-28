import React, { Component } from "react";
import Input from "../components/input";
import Button from "../components/Botao";
import Title from "../components/Title";
import apiAxios from "../services/api";
import  Navbar  from "../components/navbar";

class AddNewProfessor extends Component {
  constructor(props){
    super(props)
    this.state = {
    name: "",
    email: ""
    }
    this.handleAddprof = this.handleAddprof.bind(this)
  }

  handleAddprof = (e) => {
    e.preventDefault(); 
    const { name, email } = this.state
    apiAxios.post("/user",{ name, email })
    .then(
      response => {
        this.setState({ name: "", email: "" });
        this.props.history.push("/professorCreated");
      }
    ).catch(e => console.log(e))
  };

  handleFormEdit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render(){
    return(
      <div>
        <form className='page-add-container'  onSubmit={this.handleAddprof}>
        <Title>CADASTRAR NOVO PROFESSOR</Title>
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
          <Navbar />
        </form>
      </div>
    )
  }
}

export default AddNewProfessor;