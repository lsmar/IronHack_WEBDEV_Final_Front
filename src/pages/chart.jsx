import React, { Component } from 'react'
import apiAxios from "../services/api"
import {Radar} from "react-chartjs-2"


export default class chart extends Component {
  constructor(props){
    super(props)
    const {match:{params}} = this.props
    this.state={
      studentId:params.studentId,
      projectId:params.projectId,
      dataGood:{},
      dataBad:{},
      chartOptions: {},
      plugins: [{
        /* Adjust axis labelling font size according to chart size */
        beforeDraw: function(c) {
            var chartHeight = c.chart.height;
            var size = chartHeight * 5 / 100;
            c.options.scale.pointLabels.fontSize = size;
            c.options.legend.labels.fontSize = size;
            c.options.scale.ticks.fontSize=size;
            
        }
    }]
    }
  }
  componentDidMount(){
    apiAxios.get(`record/studentReview/${this.state.studentId}/${this.state.projectId}`)
    .then(response=>{
      
      const{conversation,goodParticipation,creativity,comprehension,teamWork,ideasConnection,noEngagement} =response.data.tags
      const {totalDays,absences} = response.data
      this.setState({dataGood:{
      labels: ["Criatividade", ["Entender o"," Problema"], "Participação +", ["Trabalho em"," Equipe"], ["Encadeamento"," de Ideias"]],
      datasets: [{
      label: "Contribuições Positivas",
        backgroundColor: "rgba(2,2,222,0.5)",
        data: [creativity,comprehension , goodParticipation, teamWork, ideasConnection],
        
      }]
    },dataBad:{
      labels: ["Conversa", ["Falta de","Engajamento"], "Faltas"],
      datasets: [{
      label: "Contribuições Negativas",
        backgroundColor: "rgba(222,2,2,0.5)",
        data: [conversation,noEngagement , absences],
        
      }]
    }, chartOptions:{
      scale: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: totalDays,
          stepSize: 1,
          //Boolean - Show a backdrop to the scale label
          showLabelBackdrop: true,
          backdropBorder:0,

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
        angleLines: { color: "#333", lineWidth: 0.5 },
        
      },
      legend: {
        position: 'bottom'
      }
    }
    
  })})
    .catch(err=>console.log(err))
  }
  render() {
    
    return (
      <div>
        {/* {this.state.studentId}
        <br/>
        {this.state.projectId} */}
        <Radar data={this.state.dataGood} options={this.state.chartOptions} plugins={this.state.plugins} />
        <hr/>
        <Radar data={this.state.dataBad} options={this.state.chartOptions} plugins={this.state.plugins} />
      </div>
    )
  }
}
