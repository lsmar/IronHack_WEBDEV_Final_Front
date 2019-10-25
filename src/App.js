import React, {Component, Fragment} from 'react';
// COMPONETS IMPORT AREA
import Logo from './components/Logo';
import Title from './components/Title';
import Delete from './components/iconDelete';
import Edit from './components/iconEdit';
import Navbar from './components/navbar'

function App() {
  return (
    <Fragment>
      <Logo />
      <Title>
        Titulo
      </Title>
      <Delete method={() => console.log('banana')}></Delete>
      <Edit url='https://google.com.br' />
      <Navbar role={'COORDINATOR'}/>
    </Fragment>
  );
}

export default App;
