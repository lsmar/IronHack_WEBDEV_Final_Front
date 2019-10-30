import React, {Component, Fragment} from 'react';
import {getUser} from "../services/auth";
// COMPONENTS IMPORT
import Logo from '../components/Logo';
import Search from '../components/searchBar';
import Card from '../components/CardProject';
import Nav from '../components/navbar';
import apiAxios from '../services/api';
import Loader from '../components/loader';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      project: [],
      input:'',
      error: '',
      tolken: [],
      loader: true,
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  componentDidMount(){
    this.setState({tolken: getUser()});
    apiAxios.get('/project/my')
    .then(response => this.setState({project: response.data, loader: false}, () => {
      this.state.project.length === 0 ? this.setState({error: 'Ainda não há projetos', loader: false}) : this.setState({error: ''})
    })
    )
    .catch(err => console.log(err)
    );
  }

  onChangeHandler(e){
    this.setState({
      input: e.target.value,

    })
  }

  
  render() {
    const projects = [...this.state.project].filter(el=>el.name.toLocaleLowerCase().indexOf(this.state.input)>-1);
    return(
      <Fragment>
        <Logo/>
        <div className='page-home-container'>
        {!this.state.loader?<Search placeholder='🔎 Buscar...' method={this.onChangeHandler}/>: null}
        {this.state.loader?<Loader />:null}
        <p className="error">{this.state.error}</p>
        <Card projects={projects}/>
        <Nav role={this.state.tolken.role} />
        </div>
      </Fragment>
    );
  }
}

export default Home;




