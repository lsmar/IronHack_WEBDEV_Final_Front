import React, {Component, Fragment} from 'react';
// COMPONENTS IMPORT
import Logo from '../components/Logo'
import Title from '../components/Title';
import Search from '../components/searchBar'
import Card from '../components/CardProject'
import Nav from '../components/navbar'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      project: [{name: 'Projeto incrivel', image: 'https://www.ledr.com/colours/grey.jpg'}, {name: 'monicat', image: 'https://www.ledr.com/colours/grey.jpg'}, {name: 'Lucas', image: 'https://www.ledr.com/colours/grey.jpg'}, {name: 'Grazy linda', image: 'https://www.ledr.com/colours/grey.jpg'}],
      input:''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
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
        <Logo title={'Home'}/>
        <div className='page-home-container'>
        <Search placeholder='🔎 Buscar...' method={this.onChangeHandler}/>
        <Card projects={projects}/>
        <Nav />
        </div>
      </Fragment>
    );
  }
}

export default Home;



