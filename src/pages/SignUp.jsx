import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import apiAxios from "../services/api"
import { login } from "../services/auth";

class SignUp extends Component {
  constructor(props){
  super(props)
  this.state={
    institution:"",
    name: "",
    email: "",
    password:"",
    error: ""
  }
  this.handleFormEdit = this.handleFormEdit.bind(this)
  this.handleSignUp = this.handleSignUp.bind(this)
  }
  
  //* Form submit
  handleSignUp = async e => {
    e.preventDefault();
    const {institution,name, email, password } = this.state;
    if (!institution ||!name || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        const signupResponse = await apiAxios.post("/auth/signup", { institution,name, email, password });
        login(signupResponse.data.token)
        debugger;

        this.props.history.push("/app");
      } catch (err) {
        debugger;
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };

  handleFormEdit = e=>{
    this.setState({[e.target.name]:e.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSignUp}>
          
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Institution "
            name="institution"
            onChange={this.handleFormEdit}
          />
          <input
            type="text"
            placeholder="Nome "
            name="name"
            onChange={this.handleFormEdit}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            name="email"
            onChange={this.handleFormEdit}
          />
          <input
            type="password"
            placeholder="Senha"
            name="password"
            onChange={this.handleFormEdit}
          />
          <button type="submit">Cadastrar E Logar</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </form>
      </div>
    );
  }
}

export default SignUp;

