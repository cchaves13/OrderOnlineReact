import React, { Component } from 'react'

export default class ConfirmationScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        var mapSytle = {
            width:"500px",
            height: "500px",
        }
        return (
            <div>
                <h1>Confirmacion de Pedido</h1>
                <div id="googleMap" style={mapSytle}></div>               
            </div>
        )
    }
}
