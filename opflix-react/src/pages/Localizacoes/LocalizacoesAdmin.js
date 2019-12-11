import React,{Component} from 'react';
import logosimples from '../../assets/img/LogoSimples.png';
import Rodape from '../../components/Rodape/Rodape';
import { parseJwt } from "../../services/auth";
import Axios from "axios";

class LocalizacoesAdmin extends Component{
    constructor(){
        super();
        this.state = {
            Permissao : ''
        };this.state = {
            lista: [
                // {IdUsuario: 1, Nome: "Erik", Email: "erik@email.com", Senha: "123456", Permissao: "ADMINISTRADOR"},
                // {IdUsuario: 2, Nome: "Cassiana", Email: "cassiana@email.com", Senha: "123456", Permissao: "ADMINISTRADOR"},
                // {IdUsuario: 3, Nome: "Helena", Email: "helena@email.com", Senha: "123456", Permissao: "ADMINISTRADOR"}
            ],
            NomeLancamento : '',
            Latitude : '',
            Longitude : ''
        };
        this.cadastrarLocalizacao = this.cadastrarLocalizacao.bind(this);
    }

    cadastrarLocalizacao(event) {
        event.preventDefault();
        fetch("http://192.168.4.209:5000/api/localizacoes", {
            method: "POST",
            body: JSON.stringify({ NomeLancamento: this.state.NomeLancamento, Latitude: this.state.Latitude, Longitude: this.state.Longitude }),
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json"
            }
        })
        .then(response => response.json())
        .catch(error => console.log(error));
   }

   atualizarNomeLancamento(event) {
        this.setState({ NomeLancamento: event.target.value })
    }

    atualizarLatitude(event) {
        this.setState({ Latitude: event.target.value })
        }

    atualizarLongitude(event) {
        this.setState({ Longitude: event.target.value })
    }

    componentDidMount(){
    this.setState({Permissao: parseJwt().Permissao})
    }

    render(){
        return(
            <div>
                <header className="cabecalhoPrincipal">
                    <div className="container">
                    <img src={logosimples} />

                    <nav className="cabecalhoPrincipal-nav">
                        {this.state.Permissao}
                    </nav>
                    </div>
                </header>

                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastroLocalizacao">
                    <h1 className="conteudoPrincipal-cadastroLocalizacao-titulo">Localizações</h1>
                    {/* <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Lançamento</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo"></tbody>
                        </table>
                    </div> */}
                   
                        <div className="container" id="conteudoPrincipal-cadastroLocalizacao">
                        <h2 className="conteudoPrincipal-cadastroLocalizacao-titulo">
                        Cadastrar Localização
                        </h2>
                        <form onSubmit={this.cadastrarLocalizacao }>
                        <div className="container">
                            <input
                            type="text"
                            className="className__nomeLancamento"
                            id="input__nomeLancamento"
                            placeholder="Nome do Lançamento"
                            value={this.state.NomeLancamento}
                            onChange={this.atualizarNomeLancamento.bind(this)}
                            />
                            <input
                            type="text"
                            className="className__latitude"
                            id="input__latitude"
                            placeholder="Latitude"
                            value={this.state.Latitude}
                            onChange={this.atualizarLatitude.bind(this)}
                            />
                            <input
                            type="text"
                            className="className__longitude"
                            id="input__longitude"
                            placeholder="Longitude"
                            value={this.state.Longitude}
                            onChange={this.atualizarLongitude.bind(this)}
                            />
                            <button
                            id="btn__cadastrarLocalizacao"
                            className="conteudoPrincipal-btn-cadastroLocalizacao"
                            >
                            GO!
                            </button>
                        </div>
                        </form>
                        {/* <Link to="/login">Login</Link> */}
                    </div>
                    
                    </section>
                </main>

                <footer className="rodapePrincipal">
                    <section className="rodapePrincipal-patrocinadores">
                    <div className="container">
                        <p>Escola SENAI de Informática - 2019</p>
                    </div>
                    </section>
                </footer>
                </div>
        );
    }
}

export default LocalizacoesAdmin;