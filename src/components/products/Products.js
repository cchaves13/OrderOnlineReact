import React, { Component } from 'react'
import axios from 'axios';
import {getBaseApiUrl} from '../../common/Urls';
import './Products.scss';   
import AddProduct from './AddProduct/AddProduct';
class Products extends Component {

   
    constructor(props) {
        super(props)
        
        this.state = {
                 products: [],
                 showModal:false,
                 productToEdit:{Name:"",Price:""}
        }
    }

    

    componentDidMount(){
        this.getProducts();
    }

    getProducts = ()=>{
        axios.get(getBaseApiUrl() + "/product").then(response=> {
            this.setState({products:response.data});
        });
    }

    toggleModal= ()=>{
        this.setState({showModal:!this.state.showModal});
    }

    handleEdit = (e, product)=>{
        this.toggleModal();
        this.setState({productToEdit: product});       
    }

    deleteProduct = (e, product)=>{
        console.log(product);
        axios.post(getBaseApiUrl() + "/product/delete/" + product.Id).then(response=>{
            console.log(response);
            this.getProducts();
        });
    }

    render() {
        return (
            <div id="ProductsPage">
                <h1>Productos</h1>
                <div className="manage-bar">
                    <input className="beauty-input" placeholder="Buscar Producto"></input>
                    <a className="beauty-btn green" onClick={this.toggleModal}>Agregar Producto</a>
                </div>
                <table className="beauty-table" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>          
                            <th>Accion</th>              
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((product=>
                            <tr key={product.Id}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td>
                                    <a className="beauty-btn green" onClick={(e)=> {this.handleEdit(e, product)}}>Editar</a>
                                    <a className="beauty-btn red" onClick={(e)=> {this.deleteProduct(e, product)}}>Eliminar</a>
                                </td>
                            </tr>
                         ))}
                    </tbody>
                </table>
                {
                    this.state.showModal ? 
                    <AddProduct 
                        refreshProducts={this.getProducts} 
                        modalControl={this.toggleModal}
                        productToEdit={this.state.productToEdit}>
                    </AddProduct> 
                        : ""
                }                
            </div>
        )
    }
}

export default Products;
