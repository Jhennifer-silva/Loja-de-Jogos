import { Link } from 'react-router-dom';
import { useState } from 'react';
import icone from '../../assets/icone.png';
import jogo1 from '../../assets/principal/jogo1.png';
import jogo2 from '../../assets/principal/jogo2.png';
import jogo3 from '../../assets/principal/jogo3.png';
import jogo4 from '../../assets/principal/jogo4.png';
import jogo5 from '../../assets/principal/jogo5.png';
import jogo6 from '../../assets/principal/jogo6.png';
import jogo7 from '../../assets/principal/jogo7.png';
import jogo8 from '../../assets/principal/jogo8.png';
import jogo9 from '../../assets/principal/jogo9.png';
import carrinho from'../../assets/carrinho.png';
import jogoLanc1 from '../../assets/principal/jogoLanc1.png';
import jogoLanc2 from '../../assets/principal/jogoLanc2.png';
import jogoLanc3 from '../../assets/principal/jogoLanc3.png';
import jogoLanc4 from '../../assets/principal/jogoLanc4.png';
import jogoLanc5 from '../../assets/principal/jogoLanc5.png';
import jogoLanc6 from '../../assets/principal/jogoLanc6.png';
import './principal.css';
import '../../styles.css'

function Lancamentos() {
    const [indiceAtualPromocoes, setIndiceAtualPromocoes] = useState(0);

    const divsPromocoes = [
        <div className="imagensDiv1">
            <img src={jogo1} alt="Capa de jogo 1" id="jogo1" />
            <p className='prom1' id='prom11'>-15%</p>
            <p className='prom1' id='prom12'>R$ 169,90</p>
            <img src={jogo2} alt="Capa de jogo 2" id="jogo2" />
            <p className='prom2' id='prom21'>-25%</p>
            <p className='prom2'id='prom22'>R$ 149,99</p>
            <img src={jogo3} alt="Capa de jogo 3" id="jogo3"/>
            <p className='prom3'id='prom31'>-40%</p>
            <p className='prom3'id='prom32'>R$ 119,95</p>
        </div>,
        <div className="imagensDiv2">
            <img src={jogo4} alt="Capa de jogo 4" id="jogo4" />
            <p className='prom1' id='prom11'>-50%</p>
            <p className='prom1' id='prom12'>R$ 28,49 </p>
            <img src={jogo5} alt="Capa de jogo 5" id="jogo5" />
            <p className='prom2' id='prom21'>-30%</p>
            <p className='prom2'id='prom22'>R$ 91,00</p>
            <img src={jogo6} alt="Capa de jogo 6" id="jogo6"/>
            <p className='prom3'id='prom31'>-25%</p>
            <p className='prom3'id='prom32'>R$ 149,62</p>
        </div>,
        <div className="imagensDiv3">
            <img src={jogo7} alt="Capa de jogo 7" id="jogo7" />
            <p className='prom1' id='prom11'>-80%</p>
            <p className='prom1' id='prom12'>R$ 39,80</p>
            <img src={jogo8} alt="Capa de jogo 8" id="jogo8" />
            <p className='prom2' id='prom21'>-50%</p>
            <p className='prom2'id='prom22'>R$ 124,99</p>
            <img src={jogo9} alt="Capa de jogo 9" id="jogo9"/>
            <p className='prom3'id='prom31'>-20%</p>
            <p className='prom3'id='prom32'>R$ 199,92</p>
        </div>
    ];

    const proximoProm = () => {
        setIndiceAtualPromocoes((prevIndice) => {
            return (prevIndice + 1) % divsPromocoes.length;
        });
    };

    const anteriorProm = () => {
        setIndiceAtualPromocoes((prevIndice) => {
            return (prevIndice - 1 + divsPromocoes.length) % divsPromocoes.length;
        });
    };

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

    return (
        <div className="telaPrincipal">
            <nav className="navbar" id='navBar'>
                <Link to="/">
                    <img src={icone} alt="Icone do site" className="icone" />
                </Link>
                <ul className="nav-links">
                    <a href="#lancamentos">Lançamentos</a>
                    <a href="#">Populares</a>
                    <a href="#">Gêneros</a>
                    <a href="#Promocoes">Promoções</a>
                    <a href="/conta">Conta</a>
                </ul>
                <div className="pesquisa-container">
                    <input type="text" id="pesquisa"/>
                    <i className="fa fa-search"></i>
                </div>
            </nav>
            <div className="promocoes" id='Promocoes'>
                <button id="direitaProm" onClick={proximoProm}>
                    <i className="fas fa-chevron-right"></i>
                </button>
                <div className="imagensPromocoes">
                    {divsPromocoes[indiceAtualPromocoes]}
                </div>
                <button id="esquerdaProm" onClick={anteriorProm}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <div className='indice'>
                <i className={`fas fa-circle ${indiceAtualPromocoes === 0 ? 'active' : ''}`} id="circle1"></i>
                <i className={`fas fa-circle ${indiceAtualPromocoes === 1 ? 'active' : ''}`} id="circle2"></i>
                <i className={`fas fa-circle ${indiceAtualPromocoes === 2 ? 'active' : ''}`} id="circle3"></i>
                </div>
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
                    {imagensLancamentos.slice(0, 5).map((jogo, index) => (
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
                    <a href="#">Populares</a>
                    <a href="/conta">Conta</a>
                </div>
                <div className="infos">
                    <h3>Contato</h3>
                    <p><i class="fas fa-envelope"></i> gamegamedame@teste.com</p>
                    <p> <i class="fas fa-phone"></i> (99) 9 9999-9999</p>
                    <p> <i class="fas fa-location-dot"></i> Shopping X, Lavras - MG</p>
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
