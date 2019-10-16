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
          <img src={logosimples} />

          <nav className="cabecalhoPrincipal-nav">
            <a>Plataformas/Mídias</a>
            <a>Lançamentos</a>
            <a>Catgorias</a>
            <Link className="cabecalhoPrincipal-nav-login" to="/login">Login</Link>
          </nav>
        </div>
      </header>

      <section className="conteudoImagem">
        <div>
          <img src={logo} />
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
              <div className="contato-mapa conteudo-contato-mapa"></div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1487821350556!2d-46.656571184475936!3d-23.56309936754285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.+Paulista%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1552310161575" width="600" height="450" frameborder="0" allowfullscreen></iframe>
              <div className="contato-endereco conteudo-contato-endereco">
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
