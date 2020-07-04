import React, { Component } from 'react'
import './Shop.scss'
import ProductList from '../products/ProductList/ProductList';

class Shop extends Component{

constructor(props){
    super(props);
}

render(){
    return(
        <div id="shop">
            <h1>Hello Shop!</h1>            
            <ProductList></ProductList>
            
        </div>
        
    )
}

}

export default Shop



