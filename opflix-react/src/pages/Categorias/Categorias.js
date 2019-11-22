import React,{Component} from 'react';
import logosimples from "../../assets/img/LogoSimples.png";
import Rodape from '../../components/Rodape/Rodape';
import { parseJwt } from "../../services/auth";
import Axios from "axios";


class Categorias extends Component{

    constructor(){
        super();
        this.state = {
            Permissao : ''
        };
        this.state = {
            lista: []
        };
    }

    listaAtualiada() {
        Axios.get('http://192.168.4.209:5000/api/categorias', {
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
                    {(this.state.Permissao === "ADMINISTRADOR") ? 
                        (
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
                    ): ''}
                    
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

export default Categorias;