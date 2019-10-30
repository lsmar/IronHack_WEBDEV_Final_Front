import React, {Component, Fragment} from 'react';
import {getUser} from "../services/auth";
import Nav from '../components/navbar'
import Logo from '../components/Logo'
import Title from '../components/Title'


class Conta extends Component {
  constructor(props){
    super(props)
    this.state = {
      tolken: [],
    }
  }

  componentDidMount(){
    this.setState({tolken: getUser()});
  }

  render(){
    return(
      <Fragment>
        <Logo />
        <img src="/images/Icons/Conta.png" alt="conta-icon"/>
        <Title>{this.state.tolken.name}</Title>
        <p>{this.state.tolken.role}</p>
        <Nav role={this.state.tolken.role}/>
      </Fragment>
    );
  }
}

export default Conta;