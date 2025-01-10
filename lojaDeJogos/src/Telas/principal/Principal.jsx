import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './principal.css';
import '../../styles.css';
import CarrosselPromocoes from "./CarrosselPromocoes";
import CarrosselPromocoesMobile from "./CarrosselPromocoesMobile";
import icone from '../../assets/icone.png';
import carrinho from'../../assets/carrinho.png';
import jogo1 from '../../assets/principal/jogo1.png';
import jogo2 from '../../assets/principal/jogo2.png';
import jogo3 from '../../assets/principal/jogo3.png';
import jogo4 from '../../assets/principal/jogo4.png';
import jogo5 from '../../assets/principal/jogo5.png';
import jogo6 from '../../assets/principal/jogo6.png';
import jogo7 from '../../assets/principal/jogo7.png';
import jogo8 from '../../assets/principal/jogo8.png';
import jogo9 from '../../assets/principal/jogo9.png';
import jogoLanc1 from '../../assets/principal/jogoLanc1.png';
import jogoLanc2 from '../../assets/principal/jogoLanc2.png';
import jogoLanc3 from '../../assets/principal/jogoLanc3.png';
import jogoLanc4 from '../../assets/principal/jogoLanc4.png';
import jogoLanc5 from '../../assets/principal/jogoLanc5.png';
import jogoLanc6 from '../../assets/principal/jogoLanc6.png';

function Lancamentos() {
    const [showMenu, setShowMenu] = useState(false);
    
    const toggleMenu = () => {
        setShowMenu(prevState => !prevState);
        document.body.classList.toggle('no-scroll', !showMenu)
    };

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const [imagensLancamentos, setImagensLancamentos] = useState([
        { img: jogoLanc1, preco: 'R$ 299,00' },
        { img: jogoLanc2, preco: 'R$ 250,00' },
        { img: jogoLanc3, preco: 'R$ 199,00' },
        { img: jogoLanc4, preco: 'R$ 249,90' },
        { img: jogoLanc5, preco: 'R$ 239,00' },
        { img: jogoLanc6, preco: 'R$ 189,90' }
    ]);

    const proximoLanc = () => {
        let novaLista = [...imagensLancamentos];
        let primeiraImagem = novaLista.shift();
        novaLista.push(primeiraImagem);
        setImagensLancamentos(novaLista);
    };

    const anteriorLanc = () => {
        let novaLista = [...imagensLancamentos];
        let ultimaImagem = novaLista.pop();
        novaLista.unshift(ultimaImagem);
        setImagensLancamentos(novaLista);
    };

    const visibleItems = 
    screenWidth <= 676 ? 1 :
    screenWidth <= 832 ? 2 : 
    screenWidth <= 1024 ? 3 : 
    screenWidth <= 1296 ? 4 : 
    5;

    return (
        <div className="telaPrincipal">
            <nav className={`navbar ${showMenu ? 'on' : ''}`}>
                <Link to="/">
                    <img src={icone} alt="Icone do site" className="icone" />
                </Link>
                <ul className="nav-links">
                    <a href="#lancamentos">Lançamentos</a> 
                    <a href="/populares">Populares</a> 
                    <a href="#">Gêneros</a> 
                    <a href="#promocoes">Promoções</a> 
                    <a href="/conta">Conta</a>
                </ul>
                <div className="pesquisa-container">
                    <input type="text" id="pesquisa"/>
                    <i className="fa fa-search"></i>
                </div>
                <div className="menu-sand" onClick={toggleMenu}>
                    <div className="menuUm"></div>
                    <div className="menuDois"></div>
                    <div className="menuTres"></div>
                </div>
            </nav>
            <div className="promocoes" id='Promocoes'>
                {screenWidth <= 768 
                    ? <div>
                        <CarrosselPromocoesMobile />
                    </div>
                    : <div>
                        <CarrosselPromocoes />
                    </div>
                    }
            </div>
            <div className="lancamentos" id='lancamentos'>
                <p id='tituloLanc'>Lançamentos</p>
                <button id="direitaLanc" onClick={proximoLanc}>
                    <i className="fas fa-chevron-right"></i>
                </button>
                <button id="esquerdaLanc" onClick={anteriorLanc}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <div className="imagensLancamentos">
                    {imagensLancamentos.slice(0, visibleItems).map((jogo, index) => (
                        <div key={index}>
                            <img src={jogo.img} alt={`Imagem ${index + 1}`} />
                            <p>{jogo.preco}</p>
                        </div>
                    ))}
                </div>
                <img src={carrinho} alt="Carrinho de compra" id="carrinhodecompras"/>
            </div>
            <footer className="rodape">
                <div className='propag'>
                    <img src={icone} alt="Icone do site" className="iconeRodape" />
                    <p id='nomeSite'>Game Dame</p>
                    <p id='slogan'>Seu próximo jogo começa aqui</p>
                </div>
                <div className="othersPages">
                    <h3>Explorar</h3>
                    <a href="#navBar">início</a>
                    <a href="/populares">Populares</a>
                    <a href="/conta">Conta</a>
                </div>
                <div className="infos">
                    <h3>Contato</h3>
                    <p><i className="fas fa-envelope"></i> gamegamedame@teste.com</p>
                    <p> <i className="fas fa-phone"></i> (99) 9 9999-9999</p>
                    <p> <i className="fas fa-location-dot"></i> Shopping X, Lavras - MG</p>
                </div>
                <div className="creditos">
                    <p>2024 Game Dame</p>
                    <p id='criador'>By Emakers Júnior</p>
                </div>
            </footer>
        </div>
    );
}

export default Lancamentos;