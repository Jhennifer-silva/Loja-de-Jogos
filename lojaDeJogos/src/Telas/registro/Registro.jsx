import './registro.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imagemFundo from '../../assets/imagem.png';

function Registro({ setDadosUsuario }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCPF] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
    const [erro, setErrors] = useState({ nome:'', email: '', cpf: '', senha: '', confirmacaoSenha: '' });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let formErro = { nome:'', email: '', cpf: '', senha: '', confirmacaoSenha: '' };

        if (!nome) formErro.nome = "O nome de usuário é obrigatório.";
        if (!email) formErro.email = "O email é obrigatório.";
        if (!cpf) formErro.cpf = "O CPF é obrigatório.";
        if (!senha) formErro.senha = "A senha é obrigatória.";
        if (!confirmacaoSenha) formErro.confirmacaoSenha = "Confirme a senha.";
        if (confirmacaoSenha !== senha) formErro.confirmacaoSenha = "As senhas não coincidem.";

        setErrors(formErro);

        if (!formErro.nome && !formErro.email && !formErro.cpf && !formErro.senha && !formErro.confirmacaoSenha) {
            setDadosUsuario({ nome, email, cpf, senha });
            console.log('Usuário registrado com sucesso!');
            navigate('/');
        }
    };

    return (
        <div className="telaRegistro">
            <div className="titulo">
            <p >Registrar</p>
            </div>
            <div className="form">
                <input 
                    type="text" 
                    id="nome" 
                    placeholder="Nome de Usuário" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                {erro.nome && <p className="erro">{erro.nome}</p>}
                <input 
                    type="email" 
                    id="email" 
                    placeholder="E-mail" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {erro.email && <p className="erro">{erro.email}</p>}
                <input 
                    type="number"
                    id="cpf" 
                    placeholder="CPF" 
                    value={cpf}
                    onChange={(e) => setCPF(e.target.value)}
                />
                {erro.cpf && <p className="erro">{erro.cpf}</p>}
                <input 
                    type="password" 
                    id="senha" 
                    placeholder="Senha" 
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                {erro.senha && <p className="erro">{erro.senha}</p>}
                <input 
                    type="password" 
                    id="confirmacaoSenha" 
                    placeholder="Confirmar Senha" 
                    value={confirmacaoSenha}
                    onChange={(e) => setConfirmacaoSenha(e.target.value)}
                />
                {erro.confirmacaoSenha && <p className="erro">{erro.confirmacaoSenha}</p>}
                <button className="botao-registro" onClick={handleSubmit}>
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
            <img className="imgdeFundo" src={imagemFundo} alt="Imagem de fundo" />
            <div className="tela">
                <a href="/">Fazer Login</a>
            </div>
        </div>
    );
}

export default Registro;
