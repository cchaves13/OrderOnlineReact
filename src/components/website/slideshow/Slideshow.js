import React, { Component } from 'react'
import './Slideshow.scss'

class Slideshow extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    componentDidMount(){
       
    }

    renderSlides = ()=>{
        const slides = [
            {
                heading: "#QuédateEnCasa",
                backgroundImage: "/img/slideshow/pic1.jpg",
                link:"#"
            },
            {
                heading: "Compra Desde Tu Hogar",
                backgroundImage: "/img/slideshow/pic1.jpg",
                link:"#"
            },
            {
                heading: "Apoyemos a los Productores de la Zona",
                backgroundImage: "/img/slideshow/pic1.jpg",
                link:"#"
            }

        ]

        return slides.map((slide, index)=>(
        <div key={index} className="swiper-slide" style={
            {
                backgroundImage: "url(" + slide.backgroundImage + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'none',               
            }
        }>
           <h1>{slide.heading}</h1>

        </div>
        ))
    }

    render() {
        return (
        <div id="homeSlide" className="swiper-container">
            <div className="swiper-wrapper">
              {this.renderSlides()}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

          
        </div>
        )
    }
}

export default Slideshow
