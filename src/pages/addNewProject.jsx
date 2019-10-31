import React, { Component } from "react";
import {getUser} from "../services/auth";
import Input from "../components/input";
import InputFile from "../components/InputFile";
import Button from "../components/Botao";
import TextArea from "../components/TextArea";
import DropdownHabilidades from "../components/DropDowMultiSelect";
import DropdownSelection from "../components/DropDown"
import apiAxios from "../services/api";
import Navbar from "../components/navbar"
import Logo from "../components/Logo";
import TitleAndText from "../components/TitleAndText";
import TextAreaProject from "../components/TextAreaProject";

class AddNewProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      teachers: [],
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
      ],
      dropDownGrade:[
        { text: "1º", value: "1" },
        { text: "2º", value: "2"  },
        { text: "3º", value: "3" },
      ],
      dropDownClass:[
        { text: "A", value: "A" },
        { text: "B", value: "B" },
      ],
      tolken: '',

    }
    this.getTeacher = this.getTeacher.bind(this)
    this.handleFormEdit = this.handleFormEdit.bind(this)
    this.handleAddproject = this.handleAddproject.bind(this)
    this.handleDropDown = this.handleDropDown.bind(this)
    this.handleTeacherDropDown = this.handleTeacherDropDown.bind(this)
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  componentDidMount = () => {
    this.setState({tolken: getUser()});
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
    this.setState({ subjects: value})

  };

  handleTeacherDropDown = value => {
    this.setState({ teachers: value })
  };

  handleGradeDropDown = value => {
    this.setState({ grade: value });
  };

  handleClassRoomDropDown = value => {
    this.setState({ classRoom: value });
  };

  handleAddproject = (e) => {
    e.preventDefault();
    let uploadData = new FormData();
    const {name, teachers, grade, classRoom, description, subjects, image} = this.state
    uploadData.append("image", image);
    uploadData.set("name", name);
    uploadData.set("teachers", teachers);
    uploadData.set("grade", grade);
    uploadData.set("classRoom", classRoom);
    uploadData.set("description", description);
    uploadData.set("subjects", subjects);
    apiAxios({method:"post", url:"/project", data:uploadData, config:{header: {"Content-Type": "multipart/form-data"}}})
    .then(() => {
          this.setState({ name: '', teachers: [], grade: '', classRoom: '', description: '', subjects: [], image: '' })
          this.props.history.push("/projectCreated");
        })
    .catch(e => console.log(e))
  };

  handleFileUpload(event) {
    this.setState({ image: event.target.files[0]})
  }

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
          <DropdownSelection  name='grade' onChange={this.handleGradeDropDown} values={this.state.dropDownGrade} placeholder='Série'/>
          <DropdownSelection  name='classRoom' onChange={this.handleClassRoomDropDown} values={this.state.dropDownClass} placeholder='Turma'/>
          <DropdownHabilidades  name='subjects' onChange={this.handleDropDown} values={this.state.dropDownOptions} placeholder='Habilidades'/>
          <TextAreaProject handleChange={this.handleFormEdit} name='description' placeholder="Descrição" />
          
          <InputFile  
            type="file"
            placeholder="imagem"
            name="image"
            handleChange={this.handleFileUpload}
            // value={this.state.image}
          />
            <Button type="submit" label={'Cadastrar'} />
          <Navbar role={this.state.tolken.role} />
        </form>
      </div>
    )
  };
}


export default AddNewProject;