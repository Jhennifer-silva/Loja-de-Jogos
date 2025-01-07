import React from 'react';
import icone from '../../assets/icone.png';
import jogo1 from '../../assets/conta/jogo1.png';
import jogo2 from '../../assets/conta/jogo2.png';
import jogo3 from '../../assets/conta/jogo3.png';
import jogo4 from '../../assets/conta/jogo4.png';
import carrinho from'../../assets/carrinho.png';
import { Link } from 'react-router-dom';
import './conta.css';

function Conta({dadosUsuario}) {
    return (
        <div className="telaConta">
            <nav className="navbar">
                <Link to="/">
                    <img src={icone} alt="Icone do site" className="icone" />
                </Link>
                <ul className="nav-links">
                <a href="/lancamentos">Lançamentos</a> 
                <a href="#">Populares</a> 
                <a href="#">Gêneros</a> 
                <a href="#">Promoções</a> 
                <a href="/conta">Conta</a>
                </ul>
                <div className="pesquisa-container">
                    <input type="text" id="pesquisa"/>
                    <i className="fa fa-search"></i>
                </div>
            </nav>
            <div className="jogos">
                <p id="titulo">Jogos adquiridos:</p>
                <div className="grid">
                    <div className="grid-item">
                        <img src={jogo1} alt="Capa de jogo" />
                        <p className="avaliacao">100/100</p>
                    </div>
                    <div className="grid-item">
                        <img src={jogo2} alt="Capa de jogo" />
                        <p className="avaliacao">95/100</p>
                    </div>
                    <div className="grid-item">
                        <img src={jogo3} alt="Capa de jogo" />
                        <p className="avaliacao">75/100</p>
                    </div>
                    <div className="grid-item">
                        <img src={jogo4} alt="Capa de jogo" />
                        <p className="avaliacao">Adicionar Avaliação</p>
                    </div>
                </div>
                <img src={carrinho} alt="Carrinho de compra" id="carrinhodecompras"/>
            </div>
            <div className="infos">
                <h2>Olá, {dadosUsuario.nome}</h2>
                <p>Seu email é {dadosUsuario.email}</p>
                <p>Seu CPF é {dadosUsuario.cpf}</p>
                <button>Alterar dados <i className="fas fa-edit"></i></button>
                <button>Excluir Conta <i className="fas fa-trash-alt"></i></button>
                <button id="admin">Tela do admin </button>
            </div>

        </div>
    )
}

export default Conta;
