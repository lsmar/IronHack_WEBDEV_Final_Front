import React from 'react';
import Routes from "./routes/routes";
import './App.css';

import Logo from './components/Logo'
import Button from './components/button';

const App = () => (
  <div className="App">
    <Routes />;
    <Logo />;
   </div>
);

export default App;
