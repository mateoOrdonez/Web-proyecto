import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';

import InicioSesion from './Components/InicioSesion/InicioSesion'
import PrincipalLabs from './Components/PrincipalLabs/PrincipalLabs';
import Reservas from './Components/Reservas/Reservas';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<InicioSesion/>}/>
          <Route exact path="/principal" element={<PrincipalLabs/>}/>
          <Route exact path="/reservas" element={<Reservas/>}/>
        </Routes>
    </Router>
    
  );
}

export default App;
