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
        axios.get(getBaseApiUrl() + "/product/GetForEcom").then((response)=>{            
            this.setState({products:  this.initValues(response.data)});     
            this.editProduct();      
            console.log(this.state.products);
        });      
        document.addEventListener('customEvent', this.editProduct);
    }
    initValues = (values)=>{
        values.map((pro)=>{pro.Quantity = 1; pro.isProductInCart = false});
        return values;
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

    addToCart = (product)=>{
        let cart = JSON.parse(localStorage.getItem('cart'));
        let jsonProduct = JSON.stringify(product);
        if(!cart){
            let newCart = JSON.stringify({products:[product]});
            localStorage.setItem('cart', newCart);
            let stateProducts = this.state.products;
            stateProducts[stateProducts.findIndex(x=> x.Id == product.Id)].isProductInCart = true;
            this.setState({products:stateProducts});
        }else{
            if(!cart.products.find(x=> x.Id == product.Id)){
                let newCart = JSON.stringify({products:[...cart.products,product]});
                localStorage.setItem('cart', newCart);
                let stateProducts = this.state.products;
                stateProducts[stateProducts.findIndex(x=> x.Id == product.Id)].isProductInCart = true;
                this.setState({products:stateProducts});
            }            
        }    
    }


    removeToCart = (product)=>{
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.products = cart.products.filter(x=> x.Id != product.Id);
        localStorage.setItem('cart', JSON.stringify(cart));
        let stateProducts = this.state.products;
        stateProducts[stateProducts.findIndex(x=> x.Id == product.Id)].isProductInCart = false;
        this.setState({isProductInCart:false});
    }

    //this metod is when cart is updated from sidebar.js
    editProduct = ()=>{
        let changeProduct = [...this.state.products];
        let productsInCart = JSON.parse(localStorage.getItem('cart'))?.products;  
       if(productsInCart){
        changeProduct.map((product,index)=>{
            let productIndex = productsInCart.findIndex(x=> x.Id == product.Id);
            if(productIndex >=0){
                product.Quantity = productsInCart[productIndex].Quantity;
                product.isProductInCart = true;
            }else{
                product.isProductInCart = false;
            }
        });    
       }
       
        this.setState({products:changeProduct});
            
    }

    render() {
        return (
           <div id="productList" className="">
               {this.state.products.map((product, index)=> {
                   let productToShow = product;
               return <ProductDetail Product={product}
                handleQuantity={this.handleQuantity} 
                addToCart={this.addToCart} 
                removeToCart = {this.removeToCart}
                key={index}></ProductDetail>
            })}
           </div>
        )
    }
}

export default ProductList
