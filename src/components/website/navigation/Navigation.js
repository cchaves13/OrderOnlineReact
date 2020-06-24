import React, { Component } from 'react'
import './Navigation.scss'

class Navigation extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    renderMenu = ()=>{
        const navigation = [
            {label: "Inicio", link:"/"},
            {label: "Como Comprar", link:"/acerca"},
            {label: "Productos", link:"/products"},
            {label: "Tienda", link:"/Tienda"},
        ]

        return navigation.map((element)=>(
            <li>
                <a href={element.link}>{element.label}</a>
            </li>
        ))
    }

    render() {
        return (
            <div id="navigationContainer" className="">
              <nav>
                  <ul>
                      {this.renderMenu()}
                  </ul>
              </nav>
            </div>
        )
    }
}

export default Navigation
