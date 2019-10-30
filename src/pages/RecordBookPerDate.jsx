import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Botao";
import Title from "../components/Title";
import StudentsList from "../components/StudentsList";
import apiAxios from "../services/api";
import Logo from "../components/Logo";
import Navbar from "../components/navbar";

class RecordBookPerDate extends Component {
  constructor(props){
    super(props)
    this.state = {
      allRecords:[],
    }
    this.getStudents = this.getStudents.bind(this);
  }

  componentDidMount = () => {
    this.getStudents();
  }


  getStudents(){  
    apiAxios.get(`/record/project/${this.props.match.params.id}/${this.props.match.params.date}`)
    .then(projectDetails => {
        console.log(projectDetails)
        this.setState({ allRecords: projectDetails.data })
      })
    .catch(e => console.log(e))
  }

  render() {
    return (
      <div>
         <Logo />
         <div className='page-recordBook-container'>
        <Title>{this.props.match.params.date}</Title>
        <StudentsList students={this.state.allRecords} date = {this.props.match.params.date} project={this.props.match.params.id}/>
        <Link to={`/project/${this.props.match.params.id}/RecordBook`}>
        <Button type="submit" label={'Voltar'} /> </Link>
        </div>
        <Navbar />
      </div>
    );
  }
}
export default RecordBookPerDate;
