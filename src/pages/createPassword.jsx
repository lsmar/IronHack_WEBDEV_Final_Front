import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiAxios from "../services/api";
import Button from '../components/Button';
import Input from "../components/input";
import Logo from '../components/Logo';
import base64 from "base-64"

class CreatePassword extends Component {
  constructor(props) {
    super(props);
    const { match: { params } } =props;
    this.state = {
      name: "",
      email: "",
      token: params.token,
      password:"",
      confirmPassword:"",
      error:""
    };
    this.handleFormEdit = this.handleFormEdit.bind(this);
    this.handleCreatePass = this.handleCreatePass.bind(this);
  }

  componentDidMount=()=>{
    const {name, email,token } = JSON.parse(base64.decode(this.state.token))
    this.setState({name, email})
  }
  //* Form submit
  handleCreatePass = async e => {
    e.preventDefault();
    const { password, confirmPassword, token } = this.state;
    if (password !== confirmPassword) {
      this.setState({ error: "As senhas não batem! Preencher novamente." });
    } else {
      try {
        await apiAxios.post("/user/changePass", {password,token });
        this.props.history.push("/");
      } catch (err) {
        
        this.setState({ error: "Ocorreu um erro ao registrar a sua senha" });
      }
    }
  };

  handleFormEdit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='page-loginSignup-bcg'>
        <form className='page-loginSignup-container' onSubmit={this.handleCreatePass}>
        <Logo />
          {this.state.error && <p>{this.state.error}</p>}
          <h2>Olá, {this.state.name} utilize o formulário abaixo para cadastrar a sua senha.</h2>
          <Input type="password" placeholder="Senha" name="password" handleChange={this.handleFormEdit} />
          <Input type="password" placeholder="Repita a senha" name="confirmPassword" handleChange={this.handleFormEdit} />
          <Button type="submit" label="Cadastrar senha"/>
          {/* <Link className='page-loginSignup-link' to="/signup">Cadastrar Instituição</Link> */}
        </form>
      </div>
    );
  }
}

export default CreatePassword;
