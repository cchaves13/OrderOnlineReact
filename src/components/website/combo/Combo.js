import React, { Component } from 'react'
import './Combo.scss'
class Combo extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
        console.log(this.props.Products);
    }

    render() {
        return (
            <div className="combo">
                <h3>El Sabor!</h3>
                <ul>
                   {this.props.Products.map((product, index)=>(
                       <li key={index}>
                           <img src={"/img/pics/" + product.Name + ".jpg"}></img>
                       </li> 
                   ))}
                </ul>
                
            </div>
        )
    }
}

export default Combo
