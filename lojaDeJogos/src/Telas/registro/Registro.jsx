import './registro.css';
import imagemFundo from '../../assets/imagem.png';


function Registro() {

  return (
        <div className="tela-registro">
            <p className="registro">Registrar</p>
            <div id="form">
                <input type="text" id="nome" placeholder="Nome de Usuário" />
                <input type="email" id="emailRegistro" placeholder="E-mail" />
                <input type="number" id="cpf" placeholder="CPF" />
                <input type="password" id="senhaRegistro" placeholder="Senha" />
                <input type="password" id="confirmarSenha" placeholder="Confirmar Senha" />
            </div>
            <img id="imagem" src={imagemFundo} alt="Imagem de fundo" />
            <div className="tela">
                <a href="/">Fazer Login</a>
            </div>
        </div>
  )
}

export default Registro;