import React, { Fragment } from 'react';
import './App.css';
import './assets/css/base/base.css'
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';

function App() {
  return (
    <Fragment>
      <Home />
      <Sobre />
    </Fragment>
  );
}

export default App;
