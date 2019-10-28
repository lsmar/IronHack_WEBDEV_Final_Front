import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiAxios from "../services/api";
import { login, logout } from "../services/auth";
import Button from '../components/Botao'
import Input from "../components/input";
import LogoSL from '../components/LogoSL'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      institution: "",
      name: "",
      email: "",
      password: "",
      error: ""
    };
    this.handleFormEdit = this.handleFormEdit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  //* Form submit
  handleLogin = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha Email e senha" });
    } else {
      try {
        const LoginResponse = await apiAxios.post("/auth/login", { email, password });
        login(LoginResponse.data.token);
        this.props.history.push("/project");
      } catch (err) {
        this.setState({ error: "Ocorreu um erro ao fazer o login" });
      }
    }
  };

  handleFormEdit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='page-loginSignup-bcg'>
        <form className='page-loginSignup-container' onSubmit={this.handleLogin}>
        <LogoSL />
          {this.state.error && <p>{this.state.error}</p>}
          <Input type="email" placeholder="E-mail" name="email" handleChange={this.handleFormEdit} />
          <Input type="password" placeholder="Senha" name="password" handleChange={this.handleFormEdit} />
          <Button type="submit" label={'Logar'}/>
          <Link className='page-loginSignup-link' to="/signup">Cadastrar Instituição</Link>
        </form>
      </div>
    );
  }
}

export default Login;
