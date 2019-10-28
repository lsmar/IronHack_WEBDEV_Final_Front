import React, { Component, Fragment } from 'react';
import apiAxios from "../services/api";
import Button from "../components/Botao"
import Navbar from '../components/navbar';
import Logo from '../components/Logo';

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
      <Fragment>
        <Logo />
        <div className='page-projectDetail-container'>
          <h1 className='page-projectDetail-title'>"{this.state.name}"</h1>
          <span className='page-projectDetail-text-span'>
            <h5 className='page-projectDetail-text'>Professor: {this.state.teachers.length > 0 ? this.state.teachers.map(e =><span className='page-projectDetail-text-value'>{e.name}</span>) : null}</h5>
            <h5 className='page-projectDetail-text'>Habilidades: {this.state.subjects.length > 0 ? this.state.subjects.map(e => (<span className='page-projectDetail-text-value'>{e + ';' + ' '}</span>)) : null}</h5>
             <h5 className='page-projectDetail-text'> Turma: {this.state.students.length > 0 ? <span className='page-projectDetail-text-value'>{this.state.students[0].grade}</span> : null}  {this.state.students.length > 0 ? <span className='page-projectDetail-text-value'>{this.state.students[0].classRoom}</span> : null} </h5>
            <h5 className='page-projectDetail-text'>Descrição: <span className='page-projectDetail-text-value'> {this.state.description}</span></h5>
          </span>

          <Button type="submit" label={'Avaliação'} />
          <Button type="submit" label={'Resultados'} />

        </div>
        <Navbar />
      </Fragment>
    )
  }
}

export default ProjectDetail;