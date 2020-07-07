import React, { Component } from 'react'
import './Home.scss'
import Slideshow from '../slideshow/Slideshow'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <Slideshow></Slideshow>
                {this.renderAbout()}
                {this.renderFooter()}
            </div>
        )
    }
    renderAbout = ()=>{
        return (
        <div id="about">
            <h1>Sobre Nosotros</h1>
            <div className="about-div">
                <h2>Cobertura</h2>
                <img src="/img/icons/map.svg"></img>
                <p>Realizamos envíos a los cantones de Esparza y Montes de Oro</p>
            </div>
            <div className="about-div">
                <h2>Pagos</h2>
                <img src="/img/icons/pay.svg"></img>
                <p>Realiza tu pago cuando recibes tu pedido en efectivo o tarjeta</p>
            </div>
            <div className="about-div">
                <h2>Eres productor?</h2>
                <img src="/img/icons/productor.svg"></img>
                <p>Nos interesa ser su socio y distribuir sus productos de calidad</p>
            </div>
        </div>);
    }

    renderFooter = () =>{
        return(
        <footer id="footer">
            <div className="footer-container">
                <a className="social-network-link">
                    <img src="/img/icons/instagram.svg"></img>
                </a>
                <a className="social-network-link">
                    <img src="/img/icons/facebook.svg"></img>
                </a>
                <p>Sitio web desarrollado EcomDevs</p>
            </div>
        </footer>);
    }
    
}

export default Home;
