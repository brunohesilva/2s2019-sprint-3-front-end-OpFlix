import React, { Component } from 'react';

import Rodape from '../../components/Rodape/Rodape';
import RodapeStyle from '../../assets/css/Rodape.css';
import logosimples from '../../assets/img/LogoSimples.png';

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

        let url= "http://localhost:5000/api/login";

        Axios.post(url, {
            headers: {
                "Content-Type" : "application/json"
            },
            Email: this.state.Email,
            Senha: this.state.Senha,
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data.token);
                    localStorage.setItem("usuario-opflix", response.data.token);
                    this.props.history.push('/');
                } else {
                    console.log('vish deu ruim');
                }
            })
            .catch(Erro => {
                this.setState({ Erro: "Usuário ou senha inválidos" });
                console.log(Erro);
            });
    }

    render() {
        return (
            <section className="container flex">
                <div className="img__login"><div className="img__overlay"></div></div>

                <div className="item__login">
                    <div className="row">
                        <div className="item">
                            <img src={logosimples} className="icone__login" />
                        </div>
                        <div className="item" id="item__title">
                            <p className="text__login" id="item__description">
                                Bem-vindo! Faça login para acessar sua conta.
                    </p>
                        </div>
                        <form onSubmit={this.efetuarLogin}>
                            <div className="item">
                                <input
                                    className="input__login"
                                    placeholder="username"
                                    onInput={this.atualizaEstadoEmail}
                                    type="text"
                                    name="username"
                                    id="login__email"
                                />
                                <p
                                    className="text__login"
                                    style={{ color: "red", textAlign: "center" }}
                                >
                                    {this.state.Erro}
                                </p>
                            </div>
                            <div className="item">
                                <input
                                    className="input__login"
                                    onInput={this.atualizaEstadoSenha}
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    id="login__password"
                                />
                            </div>
                            <div className="item">
                                <button className="btn btn__login" id="btn__login">
                                    Login
                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;