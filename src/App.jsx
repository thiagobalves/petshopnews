import React from 'react';
import './App.css';
import './assets/css/base/base.css'
//Alias incluído para o BrowserRouter = Router
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './componentes/Cabecalho';

function App() {
  return (
    <Router>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="*" element={<Pagina404 />}/>
      </Routes>
    </Router>
  );
}

export default App;
