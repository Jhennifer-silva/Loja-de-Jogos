import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Telas/Login/Login.jsx';
import Registro from './Telas/Registro/Registro.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/registro" element={<Registro/>} />
        {/*<Route path="/lancamentos" element={<Lancamentos/>} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
