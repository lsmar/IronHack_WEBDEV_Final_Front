import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {getUser} from "../services/auth";
import apiAxios from "../services/api";
import Button from "../components/Botao"
import Navbar from '../components/navbar';
import Logo from '../components/Logo';
import Loader from '../components/loader';

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      teachers: [],
      students: [],
      subjects: [],
      description: "",
      formattedSkills: [],
      loader: true,
      tolken: [],
      owner:false,
    }
    this.getSingleProject = this.getSingleProject.bind(this);
    this.formatSkills = this.formatSkills.bind(this);
  }

  componentDidMount = () => {
    this.getSingleProject();
    this.setState({tolken: getUser()});
  };

  getSingleProject = () => {
    const { params } = this.props.match;
    apiAxios
      .get(`/project/${params.id}`)
      .then(response => {
        const {
          name,
          teachers,
          students,
          subjects,
          description
        } = response.data;
        let owner = false;
        teachers.forEach( teacher => teacher._id === this.state.tolken._id ? owner = true : null)
        this.setState({ name, teachers, students, subjects, description, owner, loader:false }, () =>
          this.formatSkills()
        );
      })
      .catch(e => console.log(e));
  };

  formatSkills = () => {
    const arr = [...this.state.subjects];
    const newArr = arr.map(subject => {
      if (subject === "math") return "Matemática";
      else if (subject === "linguagens") return "Linguagens";
      else if (subject === "natureza") return "Ciências da Natureza";
      else return "Ciências Humanas e Sociais Aplicadas";
    });
    this.setState({ formattedSkills: newArr });
  };

  render() {
    console.log(this.state.tolken._id)
    console.log(this.state.teachers)
    return (
      <Fragment>
        <Logo />
        {/* Linguagens Matemática Ciências da Natureza Ciências Humanas e Sociais Aplicadas */}

        <div className="page-projectDetail-container">
          <h1 className="page-projectDetail-title">{this.state.name}</h1>
          {!this.state.loader? <span className="page-projectDetail-text-span">
            <h5 className="page-projectDetail-text">
              Professor:
              {this.state.teachers.map((e, idx) => (
                <span className="page-projectDetail-text-value" key={idx}>
                  {e.name}
                </span>
              ))}
            </h5>
            <h5 className="page-projectDetail-text">Habilidades:
            {this.state.formattedSkills.map((e, idx) => (
                <span className="page-projectDetail-text-value" key={idx}>
                  {e}
                </span>
            ))}
            </h5>
            <h5 className="page-projectDetail-text">
              Turma:{" "}
              {this.state.students.length > 0 ? (
                <span className="page-projectDetail-text-value-class">
                  {this.state.students[0].grade}
                </span>
              ) : null}
              {this.state.students.length > 0 ? (
                <span className="page-projectDetail-text-value-class">
                  {this.state.students[0].classRoom}
                </span>
              ) : null}{" "}
            </h5>
            <h5 className="page-projectDetail-text">
              Descrição:{" "}
              <span className="page-projectDetail-text-value">
                {" "}
                {this.state.description}
              </span>
            </h5>
          </span> : null}
          {!this.state.loader?(this.state.owner?<Link to={`/project/${this.props.match.params.id}/recordBook`}> <Button type="submit" label={'Avaliação'} /> </Link>:null):null}
          {this.state.loader?<Loader />:null}

        </div>
        <Navbar />
      </Fragment>
    );
  }
}

export default ProjectDetail;
