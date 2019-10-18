import React,{Component} from 'react';
import './Usuarios.css';

import Rodape from '../../components/Rodape/Rodape';

import RodapeStyle from '../../assets/css/Rodape.css';

import logosimples from '../../assets/img/LogoSimples.png';

class Usuarios extends Component{
    constructor(){
        super();
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
    }

    componentDidMount(){
        this.listaAtualizada();
    }
    
    listaAtualizada = () =>{
        fetch('http://localhost:3000/api/usuarios')
            .then(response => response.json())
            .then(data => this.setState({ lista: data}));
    }

    adicionaItem = (event) => {
        event.preventDefault();
        console.log(this.state.Nome, this.state.Email, this.state.Senha, this.state.Permissao);
        fetch('http://localhost:3000/api/usuarios',{
            method: "POST",
            body: JSON.stringify({ Nome: this.state.Nome,  Email: this.state.Email, Senha: this.state.Senha, Permissao: this.state.Permissao}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(this.listaAtualizada())
        .catch(error => console.log(error))
        
    }

    adicionaUsuario = () =>{
        let valores_lista = this.state.lista;
        let usuarios = {Nome: this.state.Nome, Email: this.state.Email, Senha: this.state.Senha, Permissao: this.state.Permissao}

        valores_lista.push(usuarios);

        this.setState({lista: valores_lista});
    }

    atualizarNome = (event) =>{
        this.setState({Nome: event.target.value})
        console.log(this.state);
    }

    atualizarEmail = (event) =>{
        this.setState({Email: event.target.value})
        console.log(this.state);
    }

    atualizarSenha = (event) =>{
        this.setState({Senha: event.target.value})
        console.log(this.state);
    }

    atualizarPermissao = (event) =>{
        this.setState({Permissao: event.target.value})
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <header className="cabecalhoPrincipal">
                    <div className="container">
                    <img src={logosimples} />
                        <nav className="cabecalhoPrincipal-nav">
                            Administrador
                        </nav>
                    </div>
                </header>

                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                    <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Senha</th>
                            <th>Permissão</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo">
                            {this.state.lista.map(element =>{
                                return(
                                    <tr key={element.IdUsuario}>
                                        <td>{element.IdUsuario}</td>
                                        <td>{element.Nome}</td>
                                        <td>{element.Email}</td>
                                        <td>{element.Senha}</td>
                                        <td>{element.Permissao}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        </table>
                    </div>

                    <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">
                        Cadastro de Usuário
                        </h2>
                        <form>
                        <div className="container">
                            <input
                            type="text"
                            className="className__usuario"
                            id="input__usuario"
                            placeholder="Nome"
                            value={this.state.Nome}
                            onInput={this.atualizarNome}
                            />
                            <input
                            type="text"
                            className="className__email"
                            id="input__email"
                            placeholder="Email"
                            value={this.state.Email}
                            onInput={this.atualizarEmail}
                            />
                            <input
                            type="password"
                            className="className__senha"
                            id="input__senha"
                            placeholder="Senha"
                            value={this.state.Senha}
                            onInput={this.atualizarSenha}
                            />
                            <input
                            type="text"
                            className="className__permissao"
                            id="input__permissao"
                            placeholder="Permissao"
                            value={this.state.Permissao}
                            onInput={this.atualizarPermissao}
                            />
                            <button
                            id="btn__cadastrar"
                            onClick={this.adicionaItem}
                            className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                            >
                            Cadastrar
                            </button>
                        </div>
                        </form>
                    </div>
                    </section>
                </main>

                <Rodape />
            </div>        
        );
    }

}

export default Usuarios;