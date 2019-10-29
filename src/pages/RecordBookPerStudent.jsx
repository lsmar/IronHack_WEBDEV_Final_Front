import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Button from "../components/Botao";
import Title from "../components/Title";
import InputDate from "../components/inputDate";
import StudentsList from "../components/StudentsList";
import apiAxios from "../services/api";
import {getUser} from "../services/auth";


class RecordBookPerStudent extends Component {
  constructor(props){
    super(props)
    this.state = {
      studentName:"",
      tags:[],
    };
    // this.handleDateChange = this.handleDateChange.bind(this);
    this.getTags = this.getTags.bind(this);
  }

  componentDidMount = () => {
    this.getStudentInfo();
    const a = getUser();
  }

  getStudentInfo(){
    apiAxios.get(`/record/${this.props.match.params.idRecord}`)
    .then(record => this.setState({studentName:record.data.student.name}))
    .catch(e => console.log(e))
    }

  getTags(){  
    apiAxios.post(`/record/${this.props.match.params.idRecord}`)
    .then(student => {
      console.log(student);
        // this.setState({ studentName: student.data.name })
      })
    .catch(e => console.log(e))
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Title>{this.state.studentName}</Title>
        {/* {this.state.students.length>0? <StudentsList students={this.state.students} /> :null} 
        {this.getStudents}
        <Link to={`/project/${this.props.match.params.id}/RecordBook/`}>
        <Button type="submit" label={'Voltar'} on/> </Link> */}
      </div>
    );
  }
}
export default RecordBookPerStudent;
