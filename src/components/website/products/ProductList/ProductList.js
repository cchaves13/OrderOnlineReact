import React, { Component } from 'react'
import ProductDetail from '../ProductDetail/ProductDetail'
import './ProductList.scss'
import axios from 'axios';
import {getBaseApiUrl} from '../../../../common/Urls';

class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
      
       

    }

    componentDidMount(){
        axios.get(getBaseApiUrl() + "/product").then((response)=>{
            response.data.map((pro)=>{pro.Quantity = 1});
            this.setState({products:response.data});     
            this.editProduct();      
        });      
        document.addEventListener('customEvent', this.editProduct);
    }

    componentDidUpdate(){
        console.log("I refresh the state, I am a goood boy");
    }

    componentWillUnmount(){
        
    }

    handleQuantity = (productInfo, operation)=>{
        let changeProduct = [...this.state.products]; 
        let newQuantity = 0;       
        console.log({pIOfon: productInfo, operation:operation})
        if(operation === "plus"){
            newQuantity = productInfo.Unity == "Unidad" ? 
            productInfo.Quantity + 1 :
            productInfo.Quantity + 0.5;
        }else{
            newQuantity = productInfo.Unity == "Unidad" ? 
            productInfo.Quantity - 1 :
            productInfo.Quantity - 0.5;
        }
        changeProduct[changeProduct.findIndex(x=> x.Id == productInfo.Id)].Quantity = newQuantity;
        this.setState({products:changeProduct});
        
        this.addOrEditProductInCart(productInfo);

    }
    addOrEditProductInCart = (product)=>{
        var cart = JSON.parse(localStorage.getItem('cart'));
        if(cart){
            let productInCart  = cart.products.findIndex(x=> x.Id == product.Id);
            if(productInCart >=0){
                cart.products[productInCart].Quantity = product.Quantity;
            }else{
                if(product.isProductInCart)
                    cart.products.push(product);
            }
    
            localStorage.setItem('cart', JSON.stringify({products:cart.products}));
        }
        
    }

    //this metod is when cart is updated from sidebar.js
    editProduct = ()=>{
        let changeProduct = [...this.state.products];
        let productsInCart = JSON.parse(localStorage.getItem('cart'))?.products;  
            productsInCart.map((product, index)=>{
                changeProduct[changeProduct.findIndex(x=> x.Id == product.Id)].Quantity = product.Quantity;
            });      
        this.setState({products:changeProduct});
    }

    render() {
        return (
           <div id="productList" className="">
               {this.state.products.map((product, index)=> {
                   let productToShow = product;
               return <ProductDetail Product={product} handleQuantity={this.handleQuantity} key={index}></ProductDetail>
            })}
           </div>
        )
    }
}

export default ProductList
