import React,{Component} from 'react';
import { Map, GoogleApiWrapper,Marker,InfoWindow} from 'google-maps-react';

import Axios from 'axios';

 class LocalizacoesComun extends Component{

    constructor(){
        super();
        this.state = {
            lista: [],
            isOpen: false
            
        };
    }
    handleToggleOpen = () => {

        this.setState({
            isOpen: true
        });
    }
    handleToggleClose = () => {
        this.setState({
            isOpen: false
        });
    }

    componentDidMount(){

        this.listaAtualizadaLocal();
    }

    listaAtualizadaLocal =() =>{
        Axios.get('http://192.168.4.209:5000/api/localizacoes'
        )
        .then(response => {
            this.setState({lista: response.data})
            console.log(this.state)
        })
    }

    adicionaItem =(event) => {
        event.preventDefault();
        console.log(this.state.lista);
        fetch('http://192.168.4.209:5000/api/lancamentos',{
            method: 'POST',
            body: JSON.stringify({lista: this.state.lista}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(this.listaAtualizadaLocal())
        .catch(error => console.log(error))

    }
    
    render(){
        return(
            <div>

        <Map
          google={this.props.google}
          zoom={8}
          style={{width: '100%',height: '100%'}}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          {this.state.lista.map(element =>{
                            return(
                                <Marker position ={{lat: element.latitude, lng : element.longitude}} text ={element.nomeLancamento} label={element.nomeLancamento.toString()} onClick={() => this.handleToggleOpen()}>
                                    {
			this.state.isOpen &&
		 <InfoWindow onCloseClick={this.props.handleCloseCall}>
			 
		 </InfoWindow>
	 	}


		</Marker>
                                
                                 
                                
                            )
                            
                        })}
                        
        </Map>

        
          </div>
          
        );
        
    }
}
export default GoogleApiWrapper({

  })(LocalizacoesComun);