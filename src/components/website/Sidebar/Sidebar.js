import React, { Component } from 'react'
import './Sidebar.scss'
class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
             products:[]    
        }
    }

    componentDidMount(){
        var cart = JSON.parse(localStorage.getItem('cart'));
        console.log(cart);
        this.setState({products:cart.products});
    }
    plus = (e, product)=>{
        let newProductList = this.state.products;
        let productIndex = newProductList.findIndex(x=> x.Id == product.Id);
        if(product.Unity == "Unidad"){
            newProductList[productIndex].Quantity = product.Quantity  + 1;
        }else{
            newProductList[productIndex].Quantity = product.Quantity  + 0.5;
        }
        this.setState({products:newProductList});
        localStorage.setItem('cart', JSON.stringify({products:newProductList}));
    }

    minus = (e, product)=>{
        console.log("plus");       
        let newProductList = this.state.products;
        let productIndex = newProductList.findIndex(x=> x.Id == product.Id);
        if(product.Unity == "Unidad"){
            newProductList[productIndex].Quantity = product.Quantity  - 1;
        }else{
            newProductList[productIndex].Quantity = product.Quantity  - 0.5;
        }
        if(product.Quantity < 0)
        newProductList[productIndex].Quantity = 0;

        this.setState({products:newProductList});
        localStorage.setItem('cart', JSON.stringify({products:newProductList}));
    }

    render() {
        return (
            <div id="sideBar">
               <div className="sidebar-header">
                <h2>Mi Carrito</h2>
                <span id="closeCart" onClick={(e)=>{e.stopPropagation(); this.props.toggleSidebar()}}></span>
               </div>
               <ul className="cart-product-list">
                    {this.state.products.map((product)=> (
                      <li key={product.Id}>
                          <div className="cart-product-name">
                            <span>{product.Name}</span>                          
                            <span>{product.Unity}</span>          
                          </div>                       
                          <div className="cart-quantities">
                            <span className="cart-plus" onClick={(e)=> {this.plus(e, product)}}></span>  
                            <span className="cart-quantity">{product.Quantity}</span>   
                            <span className="cart-minus"  onClick={(e)=> {this.minus(e, product)}}></span>  
                          </div>       
                          <div className="cart-remove">
                          </div>           
                          <span>Subtotal: ₡{(product.Price * product.Quantity)}</span> 
                      </li>
                    ))}       
               </ul>
            </div>
        )
    }
}

export default Sidebar