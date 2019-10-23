import React,{Component} from 'react';
import logosimples from '../../assets/img/LogoSimples.png';
import Rodape from '../../components/Rodape/Rodape';
import { parseJwt } from "../../services/auth";
import Axios from "axios";

class CategoriasAdmin extends Component{

    constructor(){
        super();
        this.state = {
            Permissao : ''
        };
        this.state = {
            lista: [],
            Categoria : ''
        };

        this.cadastrarCategoria = this.cadastrarCategoria.bind(this);
    }

    listaAtualizada() {
        Axios.get('http://localhost:5000/api/categorias', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
            }
        })
            .then(data => {
                this.setState({ lista: data.data });
                console.log(this.state)
            })
            .catch(erro => {
                console.log(erro);
            });
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
                    <div className="container" id="conteudoPrincipal-lista">
                <div className="categorias">
                    {this.state.lista.map(element => {
                        return (
                            <div id="infos">
                                <ul>
                                    <li># {element.idCategoria}</li>
                                    <li>Categoria: {element.categoria}</li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
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
