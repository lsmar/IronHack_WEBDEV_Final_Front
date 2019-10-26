import React, { Component } from "react";
import  {Link} from "react-router-dom";
import apiAxios from "../services/api"
import { login } from "../services/auth";
import Input from "../components/input";
import Button from "../components/button";
import Logo from "../components/Logo";

class SignUp extends Component {
  constructor(props){
  super(props)
  this.state={
    institution:"",
    name: "",
    email: "",
    password:"",
    error: "",
    role: "COORDINATOR",
  }
  this.handleFormEdit = this.handleFormEdit.bind(this)
  this.handleSignUp = this.handleSignUp.bind(this)
  }
  
  //* Form submit
  handleSignUp = async e => {
    e.preventDefault();
    const {institution,name, email, password,role } = this.state;
    if (!institution ||!name || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        const signupResponse = await apiAxios.post("/auth/signup", { institution, name, email, password, role });
        login(signupResponse.data.token)
        debugger;

        this.props.history.push("/app");
      } catch (err) {
        debugger;
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
      }
    }
  };

  handleFormEdit = e=>{
    this.setState({[e.target.name]:e.target.value})
  }

  render() {
    return (
      <div className='page-loginSignup-bcg'>
        <form className='page-loginSignup-container' onSubmit={this.handleSignUp}>
        <Logo />
          {this.state.error && <p>{this.state.error}</p>}
          <Input
            type="text"
            placeholder="Institution "
            name="institution"
            handleChange={this.handleFormEdit}
          />
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
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            handleChange={this.handleFormEdit}
          />
          <Input type="text" name="role" value= "COORDINATOR" hidden="true"/>
          <Button type="submit" label={'Cadastrar e logar'}/>
          <Link className='page-loginSignup-link' to="/">Fazer login</Link>
        </form>
      </div>
    );
  }
}

export default SignUp;

