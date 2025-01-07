import React, { useState } from 'react'; 
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; 
import Login from './Telas/login/Login.jsx'; 
import Registro from './Telas/registro/Registro.jsx';
import RecuperarConta from './Telas/recuperar-conta/RecuperarConta.jsx';
import Conta from './Telas/conta/Conta.jsx';
import Lancamentos from './Telas/lancamentos/Lancamentos.jsx';

function App() {
  const [dadosUsuario, setDadosUsuario] = useState({ nome: '', email: '', cpf: '', senha: '' });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login dadosUsuario={dadosUsuario} />} />
        <Route path="/registro" element={<Registro setDadosUsuario={setDadosUsuario} />} />
        <Route path="/recuperacaodeconta" element={<RecuperarConta dadosUsuario={dadosUsuario} />} />
        <Route path="/conta" element={<Conta dadosUsuario={dadosUsuario} />} />
        <Route path="/lancamentos" element={<Lancamentos/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
