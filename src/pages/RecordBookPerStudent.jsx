import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Botao";
import Title from "../components/Title";
import apiAxios from "../services/api";
import IconsTags from "../components/IconsTags";
import Navbar from "../components/navbar";
import Logo from "../components/Logo";
import ButtonBlue from "../components/ButtonBlue";

class RecordBookPerStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "",
      presence: false,
      conversation: false,
      goodParticipation: false,
      creativity: false,
      comprehension: false,
      teamWork: false,
      ideasConnection: false,
      noEngagement: false,
      buttonLabel: "Salvar",
      error: ''
    };
    this.sendTags = this.sendTags.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount = () => {
    this.getStudentInfo();
  };

  getStudentInfo() {
    apiAxios
      .get(`/record/${this.props.match.params.idRecord}`)
      .then(record => this.setState({ studentName: record.data.student.name }))
      .catch(e => console.log(e));
  }

  handleClick = (e, tag) => {
    this.setState(prevState => ({ [tag]: !prevState[tag] }));
  };

  sendTags() {
    this.setState({buttonLabel:"Salvando..." });
    const tags = [
      {
        tagName: "conversation",
        value: this.state.conversation
      },
      {
        tagName: "goodParticipation",
        value: this.state.goodParticipation
      },
      {
        tagName: "creativity",
        value: this.state.creativity
      },
      {
        tagName: "comprehension",
        value: this.state.comprehension
      },
      {
        tagName: "teamWork",
        value: this.state.teamWork
      },
      {
        tagName: "ideasConnection",
        value: this.state.ideasConnection
      },
      {
        tagName: "noEngagement",
        value: this.state.noEngagement
      }
    ];
    const presence = !this.state.presence;
    apiAxios
      .patch(`/record/${this.props.match.params.idRecord}`, {tags,presence})
      .then(student => {
        this.setState({ tags: [],buttonLabel:"Salvo!" },()=>setTimeout(()=>this.setState({buttonLabel:"Salvar"}),2000));
      })
      .catch (err => {
        this.setState({ error: "Ocorreu um erro, tente novamente!" })});
  }

  render() {
    return (
      <div>
        <Logo />
      <div className='page-recordBook-perStudent'>
      <figure className='component-recordBook-img'>
      <img  src="/images/Icons/perfil-icon.png" alt="icone de usuário"/>
      </figure>
        <Title>{this.state.studentName}</Title>
        <div className="page-recordBook-perStudent-tags">
          <IconsTags
            method={this.handleClick}
            text="Ausente"
            image_src="/images/tags/ausente.png"
            tag="presence"
            active={this.state.presence ? "img-tag " : "img-tag filter-gray"}
          />
          <IconsTags
            method={this.handleClick}
            text="Criatividade"
            image_src="/images/tags/criatividade.png"
            tag="creativity"
            active={this.state.creativity ? "img-tag " : "img-tag filter-gray"}
          />
          <IconsTags
            method={this.handleClick}
            text="Conversa Paralela"
            image_src="/images/tags/conversa_paralela.png"
            tag="conversation"
            active={
              this.state.conversation ? "img-tag " : "img-tag filter-gray"
            }
          />
          <IconsTags
            method={this.handleClick}
            text="Entender o problema"
            image_src="/images/tags/entender_problema.png"
            tag="goodParticipation"
            active={
              this.state.goodParticipation ? "img-tag " : "img-tag filter-gray"
            }
          />
          <IconsTags
            method={this.handleClick}
            text="Participação construtiva"
            image_src="/images/tags/participacao_construtiva.png"
            tag="comprehension"
            active={
              this.state.comprehension ? "img-tag " : "img-tag filter-gray"
            }
          />
          <IconsTags
            method={this.handleClick}
            text="Trabalho em equipe"
            image_src="/images/tags/trabalho_em_equipe.png"
            tag="teamWork"
            active={this.state.teamWork ? "img-tag " : "img-tag filter-gray"}
          />
          <IconsTags
            method={this.handleClick}
            text="Encadeamento de ideias"
            image_src="/images/tags/encadeamento_de_ideias.png"
            tag="ideasConnection"
            active={
              this.state.ideasConnection ? "img-tag " : "img-tag filter-gray"
            }
          />
          <IconsTags
            method={this.handleClick}
            text="Falta de engajamento"
            image_src="/images/tags/falta_de_engajamento.png"
            tag="noEngagement"
            active={
              this.state.noEngagement ? "img-tag " : "img-tag filter-gray"
            }
          />
        </div>
        <div className='page-recordBook-perStudent-button'>
          {this.state.error && <p  className="error">{this.state.error}</p>}
          <span className='page-recordBook-perStudent-button-span'>
        <Button label={this.state.buttonLabel} method={this.sendTags}/>
        </span>
          <Link  className='page-recordBook-perStudent-button-span'
            to={`/project/${this.props.match.params.id}/RecordBook/${this.props.match.params.date}`}
          >
            <ButtonBlue label={"Voltar a lista de estudantes"} />
          </Link>
          </div>
      </div>
      <Navbar />
      </div>
    );
  }
}
export default RecordBookPerStudent;
