import { Link } from 'react-router-dom';
import icone from '../../assets/icone.png';
import './Lancamentos.css';

function Lancamentos(){
    
    return(
        <div className="telaLancamentos">
            <nav className="navbar">
                <Link to="/">
                    <img src={icone} alt="Icone do site" className="icone" />
                </Link>
                <ul className="nav-links">
                    <a href="#">Lançamentos</a>
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

            </div>
            <div className="lancamentos">
                <p>Lancamentos</p>
            </div>
        </div>
    )
}

export default Lancamentos;

                