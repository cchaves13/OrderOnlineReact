import React, { Component } from 'react'
import './Home.scss'
import Slideshow from '../slideshow/Slideshow'
import ProductDetail from '../products/ProductDetail/ProductDetail'
import Combo from '../combo/Combo'

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
                {this.renderOffert()}
                {this.renderFooter()}
            </div>
        )
    }

    // renderBuyNow = ()=> {
    //     return(
    //     <div className="buy-now">
    //         <div >
    //             <p>WhatsApp: 8371-0654</p>
    //         </div>
    //         {/* <ul>
    //             <li>Facilitar el acceso y compras de productos alimenticios.</li>
    //             <li>Apoyar los productores de la zona consumiendo sus productos.</li>
    //             <li>Disminuir el tiempo innecesario en compras.</li>
    //             <li>Reducir el uso de bolsas plasticas entregando los productos en su hogar.</li>
    //         </ul> */}

    //     </div>)
    // }

    renderOffert = ()=> {
        const products = [
          {
            comboList: [    
                {Name:"Chile Dulce",Price:"400", Unity: "Kilo"},
                {Name:"Papa",Price:"400", Unity: "Kilo"},
                {Name:"Culantro",Price:"400", Unity: "Kilo"}
            ]
          },
          {
            comboList: [    
                {Name:"Chile Dulce",Price:"400", Unity: "Kilo"},
                {Name:"Papa",Price:"400", Unity: "Kilo"},
                {Name:"Culantro",Price:"400", Unity: "Kilo"}
            ]
          }
        ]
        return(
           <div id="combos">
               <h1>Combos</h1>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                
                    {products.map((productsInArray, index)=> (
                        <div className="swiper-slide">
                            <Combo Products={productsInArray.comboList}></Combo>
                        </div>
                    ))}
                
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <a>Ir a Tienda</a>      
           </div>      
        )
    }
    renderAbout = ()=>{
        return (
        <div id="about">
            <h1>Fácil y Rápido</h1>
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
            {/* <div className="about-div">
                <h2>Eres productor?</h2>
                <img src="/img/icons/productor.svg"></img>
                <p>Nos interesa ser su socio y distribuir sus productos de calidad</p>
            </div> */}
            <div className="about-div">
                <h2>Envíos</h2>
                <img src="/img/icons/truck.svg"></img>
                <p>Envíos express con 3 horas habiles de entrega al completar tu orden.</p>
            </div>
        </div>);
    }
    
    renderHowTo = ()=>{
        return(
        <div className="howto">

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
