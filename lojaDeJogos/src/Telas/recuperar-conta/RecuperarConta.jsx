import React, { useState } from 'react';
import './RecuperarConta.css'
import imagemFundo from '../../assets/imagem.png';

function RecuperarConta ({dadosUsuario}){

    const [email, setEmail] = useState('');
    const [erro, setErro] = useState({ email: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
    
        let formErro = { email: '', senha: '' };
    
        if(!email){
          formErro.email = "O email é obrigatório.";
        }
        else if(dadosUsuario.email !== email){
          formErro.email = "Usuário inválido."
        }
        setErro(formErro);
    }
        
return (
      <div className="telaRecuperacao">
        <p className="titulo">
            Recuperar <br/>
            Conta <br/>
        </p>
        <div className="form">
          <input 
          type="email" 
          id="email" 
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          {erro.email ? <p className="erro">{erro.email}</p> : null}
          <button className="botao-recuperacao" onClick={handleSubmit}>
                    <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      <img className="imgdeFundo" src={imagemFundo} alt="Imagem de fundo" />
        <div id="telas">
        <a href="/registro">Criar conta</a>
        <a href="/">Fazer Login</a>
        </div>
      </div>
  );
}

export default RecuperarConta;