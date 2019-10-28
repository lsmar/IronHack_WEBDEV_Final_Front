import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Button from "../components/Botao";
import Title from "../components/Title";
import InputDate from "../components/inputDate";
import StudentsList from "../components/StudentsList";
import apiAxios from "../services/api";


class RecordBookPerStudent extends Component {
  constructor(props){
    super(props)
    this.state = {
      studentName:"",
      tags:[],
    };
    // this.handleDateChange = this.handleDateChange.bind(this);
    // this.getStudents = this.getStudents.bind(this);
  }

  componentDidMount = () => {
    this.getStudent();
  }

  // handleDateChange (e) {
  //   this.setState({ dateValue: e.target.value });
  // }

  getStudent(){  
    apiAxios.get(`/student/${this.props.match.params.idStudent}`)
    .then(student => {
        this.setState({ studentName: student.data.name })
      })
    .catch(e => console.log(e))
  }

  render() {
    // this.getStudents();
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
