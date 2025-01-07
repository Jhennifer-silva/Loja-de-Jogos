import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import imagemFundo from '../../assets/imagem.png';


function Login({dadosUsuario}) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErrors] = useState({ email: '', senha: '' });

   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErro = { email: '', senha: '' };

    if(!email){
      formErro.email = "O email é obrigatório.";
    }
    else if(dadosUsuario.email !== email){
      formErro.email = "Usuário inválido."
    }

    if(!senha){
      formErro.senha = "A senha é obrigatória.";
    }
    else if(dadosUsuario.senha !== senha){
      formErro.senha = "Senha inválida."
    }

    setErrors(formErro);

    if (!formErro.email && !formErro.senha) {
      console.log('Login feito com sucesso!');
      navigate('/conta');
    }
  };

  return (
      <div className="telaLogin">
        <p className="titulo">Login</p>
        <div className="form">
          <input 
          type="email" 
          id="email" 
          placeholder="E-mail"
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
                    <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      <img className="imgdeFundo" src={imagemFundo} alt="Imagem de fundo" />
        <div id="telas">
        <a href="/registro">Criar conta</a>
        <a href="/recuperacaodeconta">Esqueceu a senha?</a>
        </div>
      </div>
  );
}

export default Login;