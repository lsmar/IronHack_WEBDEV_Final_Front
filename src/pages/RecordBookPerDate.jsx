import React, { Component, Fragment } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Button from "../components/Botao";
import Title from "../components/Title";
import InputDate from "../components/inputDate";
import StudentsList from "../components/StudentsList";
import apiAxios from "../services/api";


class RecordBookMainPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      dateValue: moment(new Date()).format('YYYY-MM-DD'),
      students:[],
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.getStudents = this.getStudents.bind(this);
  }

  componentDidMount = () => {
    this.getStudents();
  }

  handleDateChange (e) {
    this.setState({ dateValue: e.target.value });
  }

  getStudents(){  
    apiAxios.get(`/record/project/${this.props.match.params.id}/${this.props.match.params.date}`)
    .then(projectDetails => {
        console.log(projectDetails)
        this.setState({ students: projectDetails.data.students })
      })
    .catch(e => console.log(e))
  }

  render() {
    return (
      <Fragment>
        <Title>Diario de classe</Title>
        {/* {this.state.students.length>0? <StudentsList students={this.state.students} date ={this.state.dateValue} project={this.props.match.params.id}/> :null}  */}
        {/* {this.getStudents} */}
        <Link to={`/project/${this.props.match.params.id}/RecordBook/`}>
        <Button type="submit" label={'Voltar'} /> </Link>
      </Fragment>
    );
  }
}
export default RecordBookMainPage;
