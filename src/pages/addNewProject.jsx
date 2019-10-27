import React, { Component } from "react";
import Input from "../components/input";
import Button from "../components/Botao";
import Title from "../components/Title";
import TextArea from "../components/TextArea";
import DropdownHabilidades from "../components/DropDowMultiSelect"
import apiAxios from "../services/api";

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
 
  render() {
    return (
      <div>
        <div className='page-loginSignup-bcg'>
          <form className='page-loginSignup-container' onSubmit={this.handleAddproject}>
            <Title>CADASTRAR NOVO PROJETO</Title>
            {this.state.error && <p>{this.state.error}</p>}
            <Input
              type="text"
              placeholder="Nome"
              name="name"
              handleChange={this.handleFormEdit}
            />
            <select className='components-input' name='Professor'>
              <option value="DEFAULT">Professor</option>
              {this.checkTeacher(this.state.teacherList).map((e, idx) => {
                return <option key={idx} value={e.name}>{e.name}</option>
              })}
            </select>
            <DropdownHabilidades />
            <TextArea placeholder="Descrição" />
            <Button type="submit" label={'Cadastrar'} />
          </form>
        </div>
      </div>
    )
  };
}


export default AddNewProject;