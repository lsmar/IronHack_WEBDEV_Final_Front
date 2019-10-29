import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Button from "../components/Botao";
import Title from "../components/Title";
import InputDate from "../components/inputDate";
import StudentsList from "../components/StudentsList";
import apiAxios from "../services/api";
import ProjectCreated from "./projectCreated";


class RecordBookMainPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      dateValue: moment(new Date()).format('YYYY-MM-DD'),
      students:[],
      allRecords : [],
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.createRecord = this.createRecord.bind(this);
    this.getPreviousRecords = this.getPreviousRecords.bind(this);
  }

  componentDidMount = () => {
    this.getPreviousRecords();
  }

  handleDateChange (e) {
    this.setState({ dateValue: e.target.value });
  }

  getPreviousRecords = () => {
    apiAxios
    .get(`/record/${this.props.match.params.id}`)
    .then((diary) => {
      console.log(diary)
      //* Pegar os ids dos diarios, dos projetos para montar os links
    })
    .catch(e => console.log(e))
  }

  createRecord = (e) => {
    e.preventDefault();
    const date = this.state.dateValue
    const project = this.props.match.params.id
    console.log('id',project)
    console.log('data',date)
    apiAxios
    .post("/record/all", {project, date })
    .then((diary) => {
          console.log(diary);
        })
    .catch(e => console.log(e))
  };

  render() {
    return (
      <div>
        <Title>Diario de classe</Title>
        <Title>Escolha uma data</Title>
        <InputDate value={this.state.dateValue} name="date" method={this.handleDateChange}/>
        <Button type="submit" label={'Iniciar diário'} method={this.createRecord}/>
        <Title>Diários já criados</Title>
        {/* this.state.diaries.map(diary => <Link to="/record/${this.state.id}/${}") */}

      </div>
    );
  }
}

export default RecordBookMainPage;
