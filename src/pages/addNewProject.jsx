import React, { Component } from "react";
import Input from "../components/input";
import Button from "../components/Button";
import Title from "../components/Title";
import TextArea from "../components/TextArea";
import DropdownHabilidades from "../components/DropDowMultiSelect"
import apiAxios from "../services/api";
import  Select  from "../components/Select";
import  Navbar  from "../components/navbar"

class AddNewProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      teacher: '',
      students: '',
      description: '',
      subjects: '',
      image: '',
      teacherList: []
    }
  }

  componentDidMount = () => {
    this.getTeacher();
  }

  getTeacher = () => {
    apiAxios.get('/user')
    .then( users => {
      const teacherList = users.data 
      this.setState(teacherList)
    })
    .catch(e => console.log(e))
  }

  checkTeacher = (arr) => {
    return arr.filter(e => e.role === 'TEACHER')
  }

  handleFormEdit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddprof = (name, teacher, students, description, subjects, image) => {
    apiAxios.post("/user",{ name, teacher, students, description, subjects, image })
    .then(
      response => {
        this.props.getData();
        console.log(response.data);
        this.setState({ name: '', teacher: '', students: '', description: '', subjects: '', image: '' });
      }
    ).catch(e => console.log(e))
  };

 
  render() {
    return (
        <div>
          <form className='page-add-container' onSubmit={this.handleAddproject}>
            <Title>CADASTRAR NOVO PROJETO</Title>
            {this.state.error && <p>{this.state.error}</p>}
            <Input
              type="text"
              placeholder="Nome do projeto"
              name="name"
              handleChange={this.handleFormEdit}
            />
            <select onChange={this.handleFormEdit} className='components-input' name='teacher'>
              <option value="DEFAULT">Professor</option>
              {this.checkTeacher(this.state.teacherList).map((e, idx) => {
                return <option key={idx} value={e.name}>{e.name}</option>
              })}
            </select>
           <Select handleChange={this.handleFormEdit} name="Classe"  options={['1','2','3']} />
           <Select handleChange={this.handleFormEdit} name="Turma"  options={['A','B']} />
            <DropdownHabilidades name='subjects'/>
            <TextArea handleChange={this.handleFormEdit} name='description' placeholder="Descrição" />
            <Input
              type="text"
              placeholder="imagem"
              name="image"
              handleChange={this.handleFormEdit}
            />
            <Button type="submit" label={'Cadastrar'} />
            <Navbar />
          </form>
        </div>
    )
  };
}


export default AddNewProject;