import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiAxios from "../services/api";
import { login } from "../services/auth";

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
        debugger;
        this.props.history.push("/app");
      } catch (err) {
        debugger;

        this.setState({ error: "Ocorreu um erro ao fazer o login" });
      }
    }
  };

  handleFormEdit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          {this.state.error && <p>{this.state.error}</p>}
          <input type="email" placeholder="Endereço de e-mail" name="email" onChange={this.handleFormEdit} />
          <input type="password" placeholder="Senha" name="password" onChange={this.handleFormEdit} />
          <button type="submit">Logar</button>
          <hr />
          <Link to="/signup">Cadastrar</Link>
        </form>
      </div>
    );
  }
}

export default Login;
