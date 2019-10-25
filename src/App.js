import React, {Component} from 'react';
import Routes from "./routes/routes";
import './App.css';

import Logo from './components/Logo'
import Title from './components/Title'
import StudentsList from './components/StudentsList';




class App extends Component {
  constructor(){
    super() 
    this.state={
      obj: [{_id:123,name:'grazi'},{_id:456,name:'biel'},{_id:789,name:'monicat'},{_id:123,name:'lucax'}]
    }
  }
  render (){
    return (
    <div className="App">
   
    </div>
    );
  }
}


export default App;
