import React, { Component } from "react";
import Input from "../components/input";
import InputFile from "../components/InputFile";
import Button from "../components/Botao";
import TextArea from "../components/TextArea";
import DropdownHabilidades from "../components/DropDowMultiSelect"
import apiAxios from "../services/api";
import Select from "../components/Select";
import Navbar from "../components/navbar"
import Logo from "../components/Logo";
import TitleAndText from "../components/TitleAndText";

class AddNewProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      teacher: [],
      grade: '',
      classRoom: '',
      description: '',
      subjects: [],
      image: '',
      teacherList: [],
      dropDownOptions:[
        { text: "Linguagens", value: "linguagens",  name: "subjects" },
        { text: "Matemática", value: "math", name: "subjects"  },
        { text: "Ciências da natureza", value: "natureza", name: "subjects" },
        { text: "Ciências humanas", value: "humanas", name: "subjects" },
      ]
    }
    this.getTeacher = this.getTeacher.bind(this)
    this.handleFormEdit = this.handleFormEdit.bind(this)
    this.handleAddproject = this.handleAddproject.bind(this)
    this.handleDropDown = this.handleDropDown.bind(this)
    this.handleTeacherDropDown = this.handleTeacherDropDown.bind(this)
  }

  componentDidMount = () => {
    this.getTeacher();
  }

  getTeacher = () => {
    apiAxios.get('/user')
      .then(users => {
        users = users.data.filter(e => e.role === 'TEACHER').map((e, idx) => {
          return {text: e.name, value: e._id, name: 'teachers' }
        })
       
        this.setState({ teacherList: users })
      })
      .catch(e => console.log(e))
  }
  
  handleFormEdit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDropDown = value => {
    this.setState({ subjects: value });
  };

  handleTeacherDropDown = value => {
    this.setState({ teachers: value });
  };

  handleAddproject = (e) => {
    e.preventDefault();
    const {name, teachers, grade, classRoom, description, subjects, image} = this.state
    apiAxios
    .post("/project", { name, teachers, grade, classRoom, description, subjects, image })
    .then(() => {
          this.setState({ name: '', teachers: [], grade: '', classRoom: '', description: '', subjects: [], image: '' })
          this.props.history.push("/projectCreated");
        })
    .catch(e => console.log(e))
  };

  render() {
    return (
      <div>
        <Logo />
        <form className='page-add-container-pj' onSubmit={this.handleAddproject}>
        <span className='page-add-span'>
          <TitleAndText>CADASTRAR NOVO PROJETO</TitleAndText>
          </span>
          {this.state.error && <p>{this.state.error}</p>}
          <Input
            type="text"
            placeholder="Nome do projeto"
            name="name"
            handleChange={this.handleFormEdit}
            value={this.state.name}
          />
          {this.state.teacherList.length>0?<DropdownHabilidades name='teachers' onChange={this.handleTeacherDropDown} values={this.state.teacherList} placeholder='Professores'/>:null} 
          <Select handleChange={this.handleFormEdit} name="grade" value={this.state.grade} options={['1', '2', '3']} />
          <Select handleChange={this.handleFormEdit} name="classRoom" value={this.state.classRoom} options={['A', 'B']} />
          <DropdownHabilidades  name='subjects' onChange={this.handleDropDown} values={this.state.dropDownOptions} placeholder='Habilidades'/>
          <TextArea handleChange={this.handleFormEdit} name='description' placeholder="Descrição" />
          <InputFile  
            type="file"
            placeholder="imagem"
            name="image"
            handleChange={this.handleFormEdit}
            value={this.state.image}
          />
          <Button type="submit" label={'Cadastrar'} />
          <Navbar />
        </form>
      </div>
    )
  };
}


export default AddNewProject;