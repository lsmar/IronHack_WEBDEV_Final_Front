import React, {Component} from 'react';
import './App.css';
import StudentsList from './components/StudentsList';
import Button from './components/Button';
import TextArea from './components/TextArea';


class App extends Component {
constructor(){
  super() 
this.state={
  obj: [{_id:123,name:'grazi'},{_id:456,name:'biel'},{_id:789,name:'monicat'},{_id:123,name:'lucax'}]
  }
}
  
  render (){
    return (
      <div>
        <StudentsList students={this.state.obj}/>
        <Button method={()=> console.log('olaaaa')} label={'clica em mim!'}/>
        <TextArea name={'comente aqui'}/>
       </div>
    );
  }
}

export default App;
