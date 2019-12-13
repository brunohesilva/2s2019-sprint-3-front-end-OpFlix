import React from 'react';
import './App.css';

import logosimples from '../../assets/img/LogoSimples.png';
import logo from '../../assets/img/Logo.png';

import Rodape from '../../components/Rodape/Rodape';

import RodapeStyle from '../../assets/css/Rodape.css';


import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
      <div className="AppHome">

      <header className="cabecalhoPrincipal">
        <div className="container">
          <div className="LogoSimples">
          <img src={logosimples} />
          </div>

          <nav className="cabecalhoPrincipal-nav">


            {/* <a>Plataformas/Mídias</a>
            <a>Lançamentos</a>
            <a>Categorias</a> */}

            <Link className="cabecalhoPrincipal-nav-login" to="/login">Login</Link>
          </nav>
        </div>
      </header>

      <section className="conteudoImagem">
        <div>
          <img src={logo} />
          <div className="linha">

          </div>
          <h2>Saiba tudo sobre a Industria do
            <br />
            entretenimento aqui na OpFlix.</h2>
        </div>
      </section>
      </div>
    <main>
      <section id="conteudoPrincipal-contato">
            <h1 id="conteudoPrincipal-contato-titulo">Contato</h1>
            <div className="container conteudo-contato-titulo">
              <div className="conteudo-contato-mapa">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8871329131375!2d-46.648477084871814!3d-23.536561566562437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5843deb99025%3A0xb23619858bc7e63e!2sEscola%20SENAI%20de%20Inform%C3%A1tica!5e0!3m2!1spt-BR!2sbr!4v1574680806528!5m2!1spt-BR!2sbr" width="650" height="500" frameborder="0" allowfullscreen=""></iframe>
              </div>
              <div className="conteudo-contato-endereco">
                Alameda Barão de Limeira, 539 <br />
                São Paulo - SP
              </div>

            </div>
          </section>
        </main>

        <Rodape />
      </div>
    </div>
  );
}

export default App;
