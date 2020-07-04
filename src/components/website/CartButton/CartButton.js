import React, { Component } from 'react'
import './CartButton.scss'

class CartButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    toggleCart = ()=>{
        console.log("toggle");
    }
    render() {
        return (
            <div id="cartButton">
                <a className="cartBg" onClick={this.props.toggleSidebar}>
                </a>
            </div>
        )
    }
}

export default CartButton
