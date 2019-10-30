import React, { Component, Fragment } from "react";
import apiAxios from "../services/api";
import Button from "../components/Botao";
import Navbar from "../components/navbar";
import Logo from "../components/Logo";

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      teachers: [],
      students: [],
      subjects: [],
      description: "",
      formattedSkills: []
    };
    this.getSingleProject = this.getSingleProject.bind(this);
    this.formatSkills = this.formatSkills.bind(this);
  }

  componentDidMount = () => {
    this.getSingleProject();
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
        this.setState({ name, teachers, students, subjects, description }, () =>
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
      else if (subject === "humanas")
        return "Ciências Humanas e Sociais Aplicadas";
    });
    this.setState({ formattedSkills: newArr });
  };

  render() {
    return (
      <Fragment>
        <Logo />
        {/* //Linguagens Matemática Ciências da Natureza Ciências Humanas e Sociais Aplicadas */}

        <div className="page-projectDetail-container">
          <h1 className="page-projectDetail-title">{this.state.name}</h1>
          <span className="page-projectDetail-text-span">
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
          </span>

          <Button type="submit" label={"Avaliação"} />
          <Button type="submit" label={"Resultados"} />
        </div>
        <Navbar />
      </Fragment>
    );
  }
}

export default ProjectDetail;
