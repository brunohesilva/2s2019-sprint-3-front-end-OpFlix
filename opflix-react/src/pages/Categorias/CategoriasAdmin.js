import React,{Component} from 'react';
import logosimples from '../../assets/img/LogoSimples.png';
import Rodape from '../../components/Rodape/Rodape';
import { parseJwt } from "../../services/auth";

class CategoriasAdmin extends Component{

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
            Categoria : ''
        };

        this.cadastrarCategoria = this.cadastrarCategoria.bind(this);
    }

    
    cadastrarCategoria(event) {
        event.preventDefault();
        fetch("http://localhost:5000/api/categorias", {
            method: "POST",
            body: JSON.stringify({ Categoria: this.state.Categoria }),
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json"
            }
        })
        .then(response => response.json())
        .catch(error => console.log(error));
   }

   atualizarCategoria(event) {
       this.setState({ Categoria: event.target.value })
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
                    <h1 className="conteudoPrincipal-cadastro-titulo">Categorias</h1>
                    <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Categoria</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo"></tbody>
                        </table>
                    </div>
                   
                        <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">
                        Cadastrar Categoria
                        </h2>
                        <form onSubmit={this.cadastrarCategoria }>
                        <div className="container">
                            <input
                            type="text"
                            className="className__categoria"
                            id="input__categoria"
                            placeholder="Categoria"
                            value={this.state.Categoria}
                            onChange={this.atualizarCategoria.bind(this)}
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

export default CategoriasAdmin;
