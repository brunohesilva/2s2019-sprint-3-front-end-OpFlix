import {Route, Link, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './pages/Home/App';
import Lancamentos from './pages/Lancamentos/LancamentosAdmin';
import Categorias from "./pages/Categorias/CategoriasAdmin";
import Usuarios from "./pages/Usuarios/UsuariosAdmin";
import UsuariosAdmin from "./pages/Usuarios/UsuariosAdmin";
import UsuariosComun from "./pages/Usuarios/UsuariosComun";
import CategoriasAdmin from "./pages/Categorias/CategoriasAdmin";
import CategoriasComum from "./pages/Categorias/CategoriasComun";
import ListaCategorias from "./pages/Categorias/Categorias";
import LancamentosAdmin from "./pages/Lancamentos/LancamentosAdmin";
import LancamentosComun from "./pages/Lancamentos/LancamentosComun";
import LocalizacoesAdmin from "./pages/Localizacoes/LocalizacoesAdmin";
import LocalizacoesComun from "./pages/Localizacoes/LocalizacoesComun";
import Login from './pages/Login/Login';
import NaoEncontrado from './pages/NaoEncontrado/NaoEncontrado';

import * as serviceWorker from './serviceWorker';
import { parseJwt } from './services/auth';

const PermissaoAdmin = ({ component: Component}) => (
    <Route 
        render={
            props =>
                parseJwt().Permissao === "ADMINISTRADOR" ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                    to={{pathname: "/", state: {from: props.location}}} />
                )
        }
    />
);

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/login' component={Login} />
                <Route path='/usuarios' component={UsuariosComun} />
                <Route path='/categorias' component={CategoriasComum}/>
                <Route path='/lancamentos' component={LancamentosComun} />
                <Route path='/localizacoes' component={LocalizacoesComun} />
                <PermissaoAdmin path='/usuariosAdmin' component={UsuariosAdmin} />
                <PermissaoAdmin path='/categoriasAdmin' component={CategoriasAdmin}/>
                <PermissaoAdmin path='/lancamentosAdmin' component={LancamentosAdmin} />
                <PermissaoAdmin path='/listacategorias' component={ListaCategorias} />
                <PermissaoAdmin path='/localizacoesAdmin' component={LocalizacoesAdmin} />                 
                <Route component={NaoEncontrado} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
