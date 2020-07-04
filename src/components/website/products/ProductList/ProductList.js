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
            //this.editProduct();
        });
        //console.log({digMountList: this.state.products});
        document.addEventListener('customEvent', this.editProduct);
    }

    componentDidUpdate(){
        console.log("I refresh the state, I am a goood boy");
    }

    componentWillUnmount(){
        
    }

    handleQuantity = (productInfo)=>{
        //TODO: PLease add the changes into localStorage.
        //TODO: Please  add the minus function here.
        let changeProduct = [...this.state.products];        
        changeProduct[changeProduct.findIndex(x=> x.Id == productInfo.Id)].Quantity = productInfo.Quantity + 1;
        this.setState({products:changeProduct});
    }

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
               return <ProductDetail Product={product} handleQuantity={(productInfo)=>{this.handleQuantity(productInfo)}} key={index}></ProductDetail>
            })}
           </div>
        )
    }
}

export default ProductList
