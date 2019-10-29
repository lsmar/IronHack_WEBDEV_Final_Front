import React, { Component } from "react";
import Input from "../components/input";
import Button from "../components/Botao";
import Title from "../components/Title";
import TextArea from "../components/TextArea";
import DropdownHabilidades from "../components/DropDowMultiSelect"
import apiAxios from "../services/api";
import Select from "../components/Select";
import Navbar from "../components/navbar"

class EditProject extends Component {
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
    this.getProjectInfo = this.getProjectInfo.bind(this)
    this.handleFormEdit = this.handleFormEdit.bind(this)
    this.handleAddproject = this.handleAddproject.bind(this)
    // this.handleDropDown = this.handleDropDown.bind(this)
    // this.handleTeacherDropDown = this.handleTeacherDropDown.bind(this)
    // this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  componentDidMount = () => {
    this.getProjectInfo();
  }

  getProjectInfo = () => {
    apiAxios.get(`/project/${this.props.match.params.id}`)
      .then(project => {
        const {name, description, image} = project.data;
        this.setState({ name, description, image}, () => console.log(this.state))
      })
      .catch(e => console.log(e))
  }
  
  handleFormEdit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handleDropDown = value => {
  //   this.setState({ subjects: value });
  // };

  // handleTeacherDropDown = value => {
  //   this.setState({ teachers: value });
  // };

  handleAddproject = (e) => {
    e.preventDefault();
    // let uploadData = new FormData();
    // const {name, description, image} = this.state
    // uploadData.append("image", image);
    // uploadData.set("name", name);
    // uploadData.set("description", description);
    const {name, description} = this.state
    console.log(this.props.match.params.id)
debugger
    apiAxios
    // ({method:"patch", url:`/project/${this.props.match.params.id}`, data:uploadData, config:{header: {"Content-Type": "multipart/form-data"}}})
    .patch(`/project/${this.props.match.params.id}`, {name, description})
    .then(() => {
          this.setState({ name: '', description: '', image: '' })
          this.props.history.push("/projectCreated");
          //* Melhor seria ter uma de projeto atualizado
        })
    .catch(e => console.log(e))
  };

  // handleFileUpload(event) {
  //   console.log("The file to be uploaded is: ", event.target.files[0]);
  //   this.setState({ image: event.target.files[0]})
  // }

  render() {
    return (
      <div>
        <form className='page-add-container' onSubmit={this.handleAddproject} >
          <Title>Editar PROJETO</Title>
          {this.state.error && <p>{this.state.error}</p>}
          <Input
            type="text"
            placeholder="Nome do projeto"
            name="name"
            handleChange={this.handleFormEdit}
            value={this.state.name}
          />
          <TextArea handleChange={this.handleFormEdit} name='description' placeholder="Descrição" value={this.state.description}/>
          {/* <Input
            type="file"
            placeholder="imagem"
            name="image"
            handleChange={this.handleFileUpload}
          /> */}
            <Button type="submit" label={'Atualizar'} />
          <Navbar />
        </form>
      </div>
    )
  };
}


export default EditProject;