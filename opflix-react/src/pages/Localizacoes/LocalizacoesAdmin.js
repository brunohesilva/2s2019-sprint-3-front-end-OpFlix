import React,{Component} from 'react';
import logosimples from '../../assets/img/LogoSimples.png';
import Rodape from '../../components/Rodape/Rodape';
import { parseJwt } from "../../services/auth";
import Axios from "axios";

class LocalizacoesAdmin extends Component{
    render(){
        return(
            <h1>OI MUNDO</h1>
        );
    }
}

export default LocalizacoesAdmin;