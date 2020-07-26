import React, { Component } from 'react'
import './ConfirmationScreen.scss';

export default class ConfirmationScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 locationIsActive:false
        }
    }
    toggleLocation = ()=>{
        this.setState({locationIsActive: !this.state.locationIsActive});
    }
    render() {
        var mapSytle = {
            width:"80%",
            height: "500px",
        }
        return (
            <div className="page-padding">
                <h1>Confirmacion de Pedido</h1>
                <div className="info-user">
                    <div className="form-control">
                        <label>Nombre:</label>
                        <input src="" className="beauty-input"></input>
                    </div>
                    <div className="form-control">
                        <label>Correo:</label>
                        <input src="" className="beauty-input"></input>
                    </div>
                    <div className="form-control">
                        <label>Telefono:</label>
                        <input src="" className="beauty-input"></input>
                    </div>
                    <div className="form-control">
                        <label>Ubicacion:</label>
                        <input src="" placeholder="Escoge la ubicacion de entrega"
                            className="beauty-input" disabled></input>
                        {/* <a className="location-btn" onClick={this.toggleLocation}>
                            {this.state.locationIsActive ? "Guardar" : "Seleccionar"}
                        </a> */}
                    </div>
                </div>
                <div id="googleMap" style={mapSytle}
                 className={this.state.locationIsActive ? "map-active" : "map-hidden"}></div>
            </div>
        )
    }
}
