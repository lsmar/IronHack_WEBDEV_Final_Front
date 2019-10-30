import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Botao";
import Title from "../components/Title";
import apiAxios from "../services/api";
import IconsTags from "../components/IconsTags";
import ArrowButton from "../components/ButtonArrow";

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
      noEngagement: false
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
        console.log(student);
        this.setState({ tags: [] });
      })
      .catch(e => console.log(e));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Title>{this.state.studentName}</Title>
        <div className="tags">
          <IconsTags
            method={this.handleClick}
            text="Ausente"
            image_src="/images/tags/ausente.png"
            tag="presence"
            active={this.state.presence ? "img-tag " : "img-tag filter-gray"}
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
            text="Criatividade"
            image_src="/images/tags/criatividade.png"
            tag="creativity"
            active={this.state.creativity ? "img-tag " : "img-tag filter-gray"}
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
        <>
        <Button label={"Salvar"} method={this.sendTags}/>
<br />
<br />

          <ArrowButton method={this.previousStudent} classStyle="arrow-left"/>
          <Link
            to={`/project/${this.props.match.params.id}/RecordBook/${this.props.match.params.date}`}
          >
            <Button label={"Voltar a lista de estudantes"} />
          </Link>
          <ArrowButton method={this.nextStudent} />
        </>
      </div>
    );
  }
}
export default RecordBookPerStudent;
