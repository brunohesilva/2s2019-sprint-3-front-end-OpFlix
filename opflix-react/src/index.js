import {Route, Link, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './pages/Home/App';
import Categorias from "./pages/Categorias/CategoriasAdmin";

import CategoriasAdmin from "./pages/Categorias/CategoriasAdmin";
import CategoriasComum from "./pages/Categorias/CategoriasComun";
import Usuarios from './pages/Usuarios/Usuarios';
import Login from './pages/Login/Login';
import NaoEncontrado from './pages/NaoEncontrado/NaoEncontrado';

import * as serviceWorker from './serviceWorker';
import { parseJwt } from './services/auth';


const PermissaoComum = ({ component: Component}) => (
    <Route 
        render={
            props =>
                parseJwt().Permissao === "CLIENTE" ? (
                    <PermissaoComum {...props} />
                ) : (
                    <CategoriasAdmin {...props} />
                )
        }
    />
);

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                {/* <RotaPrivada path='/categorias' component={Categoria} /> */}
                {/* <RotaPrivada path='/usuarios' component={Usuarios} /> */}
                <Route path='/login' component={Login} />
                <PermissaoComum path='/categorias' component={CategoriasComum}/>
                {/* <Route component={NaoEncontrado} /> */}
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
