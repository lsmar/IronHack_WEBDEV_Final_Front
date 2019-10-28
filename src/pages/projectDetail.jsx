import React, { Component } from 'react';
import apiAxios from "../services/api";
import Button from "../components/Botao"

class ProjectDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      teachers: [],
      students: [],
      subjects: [],
      description: ''
    }
    this.getSingleProject = this.getSingleProject.bind(this);
  }

  componentDidMount = () => {
    this.getSingleProject()
  }

  getSingleProject = () => {
    const { params } = this.props.match;
    apiAxios.get(`/project/${params.id}`)
      .then(response => {
        const { name, teachers, students, subjects, description } = response.data;
        console.log('====>', response.data)
        this.setState({ name, teachers, students, subjects, description })
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div className='page-add-container'>
        <h1>{this.state.name}</h1>
        <h5>Professor: {this.state.teachers.length > 0 ? this.state.teachers.map(e => e.name) : null}</h5>
        <h5>Habilidades: {this.state.subjects.length > 0 ? this.state.subjects.map(e=>(<span>{e +';'+' '}</span>)): null}</h5>
        <h5> Turma: {this.state.students.length > 0 ? this.state.students[0].grade : null}  {this.state.students.length > 0 ? this.state.students[0].classRoom : null} </h5>
        <h5>Descrição: {this.state.description}</h5>
        <Button type="submit" label={'Avaliação'} />
        <Button type="submit" label={'Resultados'} />
      </div>
    )
  }
}


export default ProjectDetail;