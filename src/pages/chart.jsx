import React, { Component } from "react";
import apiAxios from "../services/api";
import { Radar } from "react-chartjs-2";
import Logo from "../components/Logo";
import Navbar from "../components/navbar";
import ButtonBlue from "../components/ButtonBlue";
import { Link } from "react-router-dom";
import TitleAndText from "../components/TitleAndText";
import Loader from '../components/loader'

export default class chart extends Component {
  constructor(props) {
    super(props);
    const {
      match: { params }
    } = this.props;
    this.state = {
      student: {},
      studentId: params.studentId,
      projectId: params.projectId,
      dataGood: {},
      dataBad: {},
      chartOptions: {},
      noRecords:false,
      loader: true,
      plugins: [
        {
          /* Adjust axis labelling font size according to chart size */
          beforeDraw: function(c) {
            var chartHeight = c.chart.height;
            var size = (chartHeight * 5) / 100;
            c.options.scale.pointLabels.fontSize = size;
            c.options.legend.labels.fontSize = size;
            c.options.scale.ticks.fontSize = size;
          }
        }
      ]
    };
  }
  componentDidMount() {
    apiAxios
      .get(
        `record/studentReview/${this.state.studentId}/${this.state.projectId}`
      )
      .then(response => {
        if(response.data.error) {
          this.setState({noRecords:true,loader: false})
          window.scrollTo(0, 0);
        } else {
        const {
          conversation,
          goodParticipation,
          creativity,
          comprehension,
          teamWork,
          ideasConnection,
          noEngagement
        } = response.data.tags;
        const { totalDays, absences, student } = response.data;
        // console.log(response.data)
        this.setState({
          student,
          dataGood: {
            labels: [
              "Criatividade",
              ["Entender o", " Problema"],
              "Participação +",
              ["Trabalho em", " Equipe"],
              ["Encadeamento", " de Ideias"]
            ],
            datasets: [
              {
                label: "Contribuições Positivas",
                backgroundColor: "rgba(2,2,222,0.5)",
                data: [
                  creativity,
                  comprehension,
                  goodParticipation,
                  teamWork,
                  ideasConnection
                ]
              }
            ]
          },
          dataBad: {
            labels: ["Conversa", ["Falta de", "Engajamento"], "Faltas"],
            datasets: [
              {
                label: "Contribuições Negativas",
                backgroundColor: "rgba(222,2,2,0.5)",
                data: [conversation, noEngagement, absences]
              }
            ]
          },
          chartOptions: {
            scale: {
              ticks: {
                beginAtZero: true,
                min: 0,
                max: totalDays,
                stepSize: 1,
                //Boolean - Show a backdrop to the scale label
                showLabelBackdrop: true,
                backdropBorder: 0,

                //String - The colour of the label backdrop
                backdropColor: "rgb(255,255,255)",

                //Number - The backdrop padding above & below the label in pixels
                backdropPaddingY: 0,

                //Number - The backdrop padding to the side of the label in pixels
                backdropPaddingX: 0,
                fontSize: 20,
                fontColor: "#333"
              },
              gridLines: {
                display: true,
                color: "#333",
                lineWidth: 0.5
              },
              angleLines: { color: "#333", lineWidth: 0.5 }
            },
            legend: {
              position: "bottom"
            }
          }, 
        loader: false
        });
        window.scrollTo(0, 0);
      }})
      .catch(err => console.log(err));
  }
  render() {
    const chart = (
      <div className="page-chart-container">
      <Logo />
      <TitleAndText>{this.state.student.name}</TitleAndText>

      <div className="page-chart-container-radar">
          <Radar
            data={this.state.dataGood}
            options={this.state.chartOptions}
            plugins={this.state.plugins}
          />
        </div>
        <div className="page-chart-container-radar">
          <Radar
            data={this.state.dataBad}
            options={this.state.chartOptions}
            plugins={this.state.plugins}
          />
        </div>
        <div>
          <Link
            className="page-recordBook-perStudent-button-span"
            to={`/project/${this.props.match.params.projectId}/RecordBook/${this.props.match.params.date}`}
          >
            <ButtonBlue label={"Lista de estudantes"} />
          </Link>
        </div>
        {this.state.loader === true ? <Loader /> : null}
        <Navbar />
      </div>
    )

    const message = (
      <div className="page-chart-container">
      <Logo />
      <TitleAndText>Não foram encontrados registros para esse aluno</TitleAndText>
        <div>
          <Link
            className="page-recordBook-perStudent-button-span"
            to={`/project/${this.props.match.params.projectId}/RecordBook/${this.props.match.params.date}`}
          >
            <ButtonBlue label={"Lista de estudantes"} />
          </Link>
        </div>
        {this.state.loader === true ? <Loader /> : null}
        <Navbar />
      </div>
    )
  
    return (
      !this.state.noRecords ?  chart : message
  )
}
}
