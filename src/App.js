import React from 'react';
import Routes from "./routes/routes";
import './App.css';

import Logo from './components/Logo'
import Title from './components/Title'
import Button from './components/button';

const App = () => (
  <div className="App">
    <Routes />;
    <Logo />;
    <Title>
        guilherme
        <h5>biel</h5>
     </Title>
   </div>
);

export default App;
