import React, { Component } from "react";
import Input from "../components/input";
import Button from "../components/Botao";
import Title from "../components/Title";
import apiAxios from "../services/api";

class AddNewProfessor extends Component {
  constructor(props){
    super(props)
    this.state = {
    name: "",
    email: ""
    }
    this.handleAddprof = this.handleAddprof.bind(this)
  }

  handleAddprof = (name, email) => {
    apiAxios.post("/user",{ name, email })
    .then(
      response => {
        this.props.getData();
        console.log(response.data);
        this.setState({ name: "", email: "" });
      }
    ).catch(e => console.log(e))
  };

  handleFormEdit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render(){
    return(
      <div className='page-loginSignup-bcg'>
        <form className='page-loginSignup-container' onSubmit={this.handleAddprof}>
        <Title>CADASTRAR NOVO PROFESSOR</Title>
          {this.state.error && <p>{this.state.error}</p>}
          <Input
            type="text"
            placeholder="Nome "
            name="name"
            handleChange={this.handleFormEdit}
          />
          <Input
            type="email"
            placeholder="E-mail"
            name="email"
            handleChange={this.handleFormEdit}
          />
          <Button type="submit" label={'Cadastrar'}/>
        </form>
      </div>
    )
  }
}

export default AddNewProfessor;