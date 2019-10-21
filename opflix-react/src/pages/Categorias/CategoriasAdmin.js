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
                // {IdCategoria: 1, Categoria: "Design"},
                // {IdCategoria: 2, Categoria: "Jogos"},
                // {IdCategoria: 3, Categoria: "Meetup"}
            ],
            Categoria: ''
        };
    }


    componentDidMount(){
        this.setState({Permissao: parseJwt().Permissao})
    }

    componentDidMount(){
        this.listaAtualizada();
     }

     listaAtualizada = () =>{
        fetch('http://localhost:5000/api/categorias')
            .then(response => response.json())
            .then(data => this.setState({ lista: data}));
    }

    adicionaItem = (event) => {
        event.preventDefault();
        console.log(this.state.nome);
        fetch('http://localhost:5000/api/categorias',{
            method: "POST",
            body: JSON.stringify({ Categoria: this.state.Categoria }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(this.listaAtualizada())
        .catch(error => console.log(error))
        
    }

    adicionaCategoria = () =>{
        let valores_lista = this.state.lista;
        let Categoria = {categoria: this.state.Categoria}

        valores_lista.push(Categoria);

        this.setState({lista: valores_lista});
    }

    atualizarCategoria = (event) =>{
        this.setState({Categoria: event.target.value})
        console.log(this.state);
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
                            <th>Título</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo"></tbody>
                        </table>
                    </div>
                   
                        <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">
                        Cadastrar Categoria
                        </h2>
                        <form>
                        <div className="container">
                            <input
                            type="text"
                            className="className__categoria"
                            id="input__categoria"
                            placeholder="Categoria"
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
