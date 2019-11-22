import React,{Component} from 'react';
import './Usuarios.css';
import Rodape from '../../components/Rodape/Rodape';
import RodapeStyle from '../../assets/css/Rodape.css';
import logosimples from '../../assets/img/LogoSimples.png';
import { parseJwt } from "../../services/auth";

class UsuariosAdmin extends Component{

    constructor(){
        super();
        this.state = {
            Permissao : ''
        };
        this.state = {
            lista: [
                // {IdUsuario: 1, Nome: "Erik", Email: "erik@email.com", Senha: "123456", Permissao: "ADMINISTRADOR"},
                // {IdUsuario: 2, Nome: "Cassiana", Email: "cassiana@email.com", Senha: "123456", Permissao: "ADMINISTRADOR"},
                // {IdUsuario: 3, Nome: "Helena", Email: "helena@email.com", Senha: "123456", Permissao: "ADMINISTRADOR"}
            ],
            Nome: '',
            Email: '',
            Senha: '',
            Permissao: ''
        };

        this.cadastrarUsuario = this.cadastrarUsuario.bind(this);
    }

    cadastrarUsuario(event) {
         event.preventDefault();
         fetch("http://192.168.4.209:5000/api/usuarios", {
             method: "POST",
             body: JSON.stringify({ Nome: this.state.Nome, Email: this.state.Email , Senha: this.state.Senha, Permissao: this.state.Permissao }),
             headers: {
                 "Content-Type": "application/json",
                 "Accept" : "application/json"
             }
         })
         .then(response => response.json())
         .catch(error => console.log(error));
    }

    atualizarNome(event) {
        this.setState({ Nome: event.target.value })
    }

    atualizarEmail(event){
        this.setState({ Email: event.target.value })
    }

    atualizarSenha(event){
        this.setState({ Senha: event.target.value })
    }

    atualizarPermissao(event){
        this.setState({ Permissao: event.target.value })
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
                    <section className="conteudoPrincipal-cadastro">
                    {/* <h1 className="conteudoPrincipal-cadastro-titulo">Usuários</h1> */}
                    {/* <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Senha</th>
                            <th>Permissao</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo"></tbody>
                        </table>
                    </div> */}
                   
                        <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">
                        Cadastrar Usuário
                        </h2>
                        <form onSubmit={this.cadastrarUsuario}>
                        <div className="container">
                            <input
                            type="text"
                            className="className__nome"
                            id="input__nome"
                            placeholder="Nome"
                            value={this.state.Nome}
                            onChange={this.atualizarNome.bind(this)}
                            />
                            <input
                            type="text"
                            className="className__email"
                            id="input__email"
                            placeholder="Email"
                            value={this.state.Email}
                            onChange={this.atualizarEmail.bind(this)}
                            />
                            <input
                            type="password"
                            className="className__senha"
                            id="input__senha"
                            placeholder="Senha"
                            value={this.state.Senha}
                            onChange={this.atualizarSenha.bind(this)}
                            />
                            <input
                            type="text"
                            className="className__permissao"
                            id="input__permissao"
                            placeholder="PERMISSÃO"
                            value={this.state.Permissao}
                            onChange={this.atualizarPermissao.bind(this)}
                            />
                            <button
                            id="btn__cadastrar"
                            className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                            >
                            Cadastrar
                            </button>
                        </div>
                        </form>
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

export default UsuariosAdmin;