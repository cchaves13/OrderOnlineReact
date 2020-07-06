import React, { Component } from 'react'
import './ProductDetail.scss';

class ProductDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 Product: {Name: "", Unity: "", Price:0, Quantity:1 }                                
        }       
    }
    componentDidMount(){
        this.setState({Product:this.props.Product});
        //let cart = localStorage.getItem('cart');
        // if(cart){
        //     var productInCart = JSON.parse(cart).products.find(x=> x.Id == this.props.Product.Id);
        //     if(productInCart){
        //         this.setState({isProductInCart:true});
        //     }            
        // }      
    }

    componentDidUpdate(){
        console.log({didUpdate: this.state.Product});
    }

    handleQuantity = (operation)=>{
        let quantity = 0;
        if(operation == "plus"){
            quantity= this.state.Product.Unity == "Kilo" ?  
            this.state.Product.Quantity + 0.5 :  this.state.Product.Quantity + 1; 
        }else{
            quantity= this.state.Product.Unity == "Kilo" ?  
            this.state.Product.Quantity - 0.5 :  this.state.Product.Quantity - 1;
            quantity = quantity <= 0 ? 0 : quantity;            
        }
        this.setState({Product:{...this.state.Product, Quantity: quantity} });
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(cart && cart.products){
            cart.products.map((product)=>{
                if(product.Id == this.state.Product.Id)
                    product.Quantity = quantity;
            });
            localStorage.setItem('cart', JSON.stringify(cart));
        }else{
            localStorage.setItem('cart', JSON.stringify({products:[this.state.Product]}));
        }       
        
        
    }

   

    render() {
        //let { Product } = this.props;
        
        return (          
            <div className="product-detail">
              
        <h3>{this.state.Product.Name} -  {this.state.Product.Unity}</h3>
                <div className="img-container" style={ {backgroundImage: 'url("/img/pics/products/' + this.state.Product.Name.toLowerCase() + '.jpg")'}}>

                </div>
                {/* <img src={"/img/pics/products/" + Product.Name + ".jpg"}></img> */}
                <p>Precio: ₡{this.state.Product.Price}</p>
                <div className="quantity-container">
                    <label>Cant: </label>
                    <input className="quantiy" value={this.state.Product.Quantity} disabled></input>
                    <div className="math-container">                      
                        <span className="math-icon minus" onClick={()=>this.props.handleQuantity(this.state.Product, "minus")}></span>
                        <span className="math-icon plus" onClick={()=>this.props.handleQuantity(this.state.Product, "plus")}></span>
                    </div>
                </div>
                {this.state.Product.isProductInCart ? 
                 <a className="beauty-btn red" onClick={()=>{this.props.removeToCart(this.state.Product)}}>Remover</a> :
                 <a className="beauty-btn green" onClick={()=>{this.props.addToCart(this.state.Product)}}>Agregar</a>}
               
            </div>
        )
    }
}

export default ProductDetail


