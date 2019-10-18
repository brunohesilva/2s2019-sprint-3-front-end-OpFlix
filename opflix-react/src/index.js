import {Route, Link, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './pages/Home/App';
import Categoria from './pages/Categoria/Categoria';
import Usuarios from './pages/Usuarios/Usuarios';
import Login from './pages/Login/Login';
import NaoEncontrado from './pages/NaoEncontrado/NaoEncontrado';

import * as serviceWorker from './serviceWorker';

const RotaPrivada = ({component: Component}) =>(
    <Route
        render={props =>
            localStorage.getItem("usuario-opflix") !== null ? (
                <Component {...props} /> 
            ) : (
                <Redirect 
                    to={{ pathname: "/login", state: {from: props.location}}}
                />
            )
        }
    />        
);

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <RotaPrivada exact path='/categoria' component={Categoria} />
                <Route path='/usuarios' component={Usuarios} />
                <Route path='/login' component={Login} />
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
