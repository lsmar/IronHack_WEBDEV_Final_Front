import React, {Component} from 'react';
import './App.css';
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
        <StudentsList students={this.state.obj}/>
    );
  }
}

export default App;
