import '../../styles.css';
import './populares.css';
import { Link } from 'react-router-dom';
import icone from '../../assets/icone.png';
import jogo1 from '../../assets/populares/jogo1.png';
import jogo2 from '../../assets/populares/jogo2.png';
import jogo3 from '../../assets/populares/jogo3.png';
import carrinho from'../../assets/carrinho.png';

function Populares (){
    return(
        <div className="telaPopulares">
            <nav className="navbar" id='navBar'>
                <Link to="/">
                    <img src={icone} alt="Icone do site" className="icone" />
                </Link>
                <ul className="nav-links">
                    <a href="/principal#lancamentos">Lançamentos</a>
                    <a href="#">Populares</a>
                    <a href="#">Gêneros</a>
                    <a href="/principal#Promocoes">Promoções</a>
                    <a href="/conta">Conta</a>
                </ul>
                <div className="pesquisa-container">
                    <input type="text" id="pesquisa"/>
                    <i className="fa fa-search"></i>
                </div>
            </nav>
            <div className="jogosPopulares">
                <h1 className="tituloPop">Populares</h1>
                <div className="popular1">
                    <p className='numJogo1'>1º</p>
                    <img src={jogo1} alt="Jogo popular 1" className="img1" />
                    <h1 className="tituloJogo1">God of War</h1>
                    <p className="descricaoJogo1">
                        Kratos é pai novamente. Como mentor e protetor de Atreus, um filho determinado a ganhar seu respeito, ele é forçado a encarar e controlar a fúria que há muito tempo o define enquanto viaja por um mundo ameaçador com o seu filho. Com a vingança contra os deuses do Olimpo no passado, Kratos agora vive no reino das divindades e monstros nórdicos. É nesse mundo duro e impiedoso que ele deve lutar para sobreviver enquanto ensina seu filho a fazer o mesmo e tenta impedi-lo de repetir os erros cruéis do Fantasma de Esparta.
                    </p>
                </div>
                <div className="popular2">
                    <p className='numJogo2'>2º</p>
                    <img src={jogo2} alt="Jogo popular 2" className="img2" />
                    <h1 className="tituloJogo2">Horizon Zero Down</h1>
                    <p className="descricaoJogo2">
                        Em um futuro distante, dominado por máquinas colossais que vagam pela Terra, a natureza retomou as ruínas da nossa civilização esquecida e pequenos grupos de sobreviventes se dividem em diferentes tribos. Empunhe o arco e a lança de Aloy, uma jovem caçadora de máquinas exilada da sua tribo, que parte em busca da verdade sobre suas origens e o misterioso mundo que ela precisa salvar.  
                    </p>
                </div>
                <div className="popular3">
                    <p className='numJogo3'>3º</p>
                    <img src={jogo3} alt="Jogo popular 3" className="img3" />
                    <h1 className="tituloJogo3">Days Gone</h1>
                    <p className="descricaoJogo3">
                        Days Gone é um jogo de ação e aventura em mundo aberto que se passa em um ambiente adverso dois anos após uma pandemia mundial devastadora.Entre na pele do antigo motociclista fora da lei Deacon St. John, um caçador de recompensas que tenta achar uma razão para viver numa terra cercada pela morte. Vasculhe assentamentos abandonados em busca de equipamentos para produzir itens e armas valiosos ou arrisque-se com outros sobreviventes que tentam ganhar a vida honestamente... ou de formas mais violentas.
                    </p>
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
                    <a href="/principal#navBar">início</a>
                    <a href="/populares">Populares</a>
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
    )
}

    

export default Populares;