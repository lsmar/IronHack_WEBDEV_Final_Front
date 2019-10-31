import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Botao";
import StudentsList from "../components/StudentsList";
import apiAxios from "../services/api";
import Logo from "../components/Logo";
import Navbar from "../components/navbar";
import moment from "moment";
import Loader from '../components/loader'

class RecordBookPerDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecords: [],
      loader: true
    };
    this.getStudents = this.getStudents.bind(this);
  }

  componentDidMount = () => {
    this.getStudents();
  };

  getStudents() {
    apiAxios
      .get(
        `/record/project/${this.props.match.params.id}/${this.props.match.params.date}`
      )
      .then(projectDetails => {
        this.setState({ allRecords: projectDetails.data, loader: false })
        })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        <Logo />
        {this.state.loader !== true ? <div className="page-recordBook-container">
          <h1 className="page-recordBook-title">
            {this.state.allRecords.length !== 0?this.state.allRecords[0].project.name:null} <span className="page-recordBook-date"> - {moment(this.props.match.params.date).format("DD/MM/YYYY")} </span>
          </h1>
          <span className="page-recordBook-bottom">
            <StudentsList
              students={this.state.allRecords}
              date={this.props.match.params.date}
              project={this.props.match.params.id}
            />
          </span>
          <Link to={`/project/${this.props.match.params.id}/RecordBook`}>
            <Button type="submit" label={"Voltar"} />
          </Link>
        </div> : null}
        {this.state.loader === true ? <Loader /> : null}
        <Navbar />
      </div>
    );
  }
}
export default RecordBookPerDate;
