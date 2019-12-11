import React, { Component } from 'react';
import {Route, Link, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";

import Rodape from '../../components/Rodape/Rodape';
import RodapeStyle from '../../assets/css/Rodape.css';
import logosimples from '../../assets/img/LogoSimples.png';
import LoginStyle from '../Login/Login.css';

import Axios from 'axios';

class Login extends Component {

    constructor() {
        super();
        localStorage.removeItem("usuario-opflix");
        this.state = {
            Email: "",
            Senha: "",
            Erro: ""
        }
    }

    atualizaEstadoEmail = (event) => {
        this.setState({ Email: event.target.value });
    }

    atualizaEstadoSenha = (event) => {
        this.setState({ Senha: event.target.value });
    }

    efetuarLogin = (event) => {
        event.preventDefault();

        let url = "http://192.168.4.209:5000/api/login";

        Axios.post(url, {
            headers: {
                "Content-Type": "application/json"
            },
            Email: this.state.Email,
            Senha: this.state.Senha,
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data.token);
                    localStorage.setItem("usuario-opflix", response.data.token);
                    this.props.history.push('/usuarios');
                } else {
                    console.log('vish deu ruim');
                }
            })
            .catch(Erro => {
                this.setState({ Erro: "Email ou Senha Inválidos" });
                console.log(Erro);
            });
    }

    render() {
        return (
            <section className="container-flex">
                <div className="img__login"><div className="img__overlay"></div></div>

                <div className="item__login">
                    <div className="row">
                        <div className="item">
                            <img src={logosimples} className="icone__login" />
                        </div>
                        {/* <nav className="cabecalhoPrincipal-navLogin">
                            <a>Plataformas/Mídias</a>
                            <a>Lançamentos</a>
                            <a>Categorias</a>
                        </nav> */}
                        <div className="Login">


                        <div id="item__title">
                            <p className="text__login" id="item__description">
                                Bem-vindo! Faça login para acessar sua conta.
                    </p>
                        </div>
                        <form onSubmit={this.efetuarLogin} className="signin_form">
                            <div className="item_sigin">
                                <input
                                    className="input__loginusername"
                                    placeholder="email"
                                    onInput={this.atualizaEstadoEmail}
                                    type="text"
                                    name="username"
                                    id="login__email"
                                    />
                            </div>
                            <div className="item_signin">
                                <input
                                    className="input__loginpassword"
                                    onInput={this.atualizaEstadoSenha}
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    id="login__password"
                                    />
                            </div>
                            <div className="item_button">
                                <button className="btn__login">
                                    GO!
                    </button>
                                <p
                                    className="text__loginErro"
                                    // style={{ color: "red", textAlign  }}
                                    >
                                    {this.state.Erro}
                                </p>
                            </div>
                            <Link to="/usuarios" className="link">Don't have an account</Link>
                        </form>
                                    </div>
                    </div>
                </div>
                <Rodape />
            </section>
        );
    }
}



export default Login;