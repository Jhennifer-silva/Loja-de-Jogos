import React, { useState } from 'react';
import './Login.css';
import imagemFundo from '../../assets/imagem.png';


function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErrors] = useState({ email: '', senha: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErro = { email: '', senha: '' };

    if(!email){
      formErro.email = "O email é obrigatório.";
    }

    if(!senha){
      formErro.email = "A senha é obrigatória.";
    }

    setErrors(formErro);

    if (!formErro.email && !formErro.senha) {
      console.log('Formulário enviado com sucesso');
    }
  };

  return (
    <div>
      <div className="tela-inicio">
        <p className="login">Login</p>
        <div className="form">
          <input 
          type="email" 
          id="email" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          {erro.email ? <p className="erro">{erro.email}</p> : null}
          <input 
          type="password" 
          id="senha" 
          placeholder="Senha" 
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          />
          {erro.senha ? <p className="erro">{erro.senha}</p> : null}
          <button className="botao-login" onClick={handleSubmit}>
            <span className="seta"></span>
          </button>
        </div>
        <img src={imagemFundo} alt="Imagem de fundo" />
      </div>
      <div id="telas">
        <a href="/registro">Criar conta</a>
        <a href="#">Esqueceu a senha?</a>
      </div>
    </div>
  );
}

export default Login;