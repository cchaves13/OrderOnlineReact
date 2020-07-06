import React, { Component } from 'react'
import './AddProduct.scss'
import Axios from 'axios'
import { getBaseApiUrl } from '../../../common/Urls'
class AddProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 product:{
                     Id:0,
                     Name:"",
                     Price: "",
                     Unity: ""
                 }
        }
    }

    componentDidUpdate(prevProps){        
      
    }

    componentDidMount(){
       this.setState({product:this.props.productToEdit});
    }

    render() {
        return (
            <div className="modal">
                <span className="close-icon" onClick={this.props.modalControl}>[X]</span>
                <h3>Producto</h3>                
                <input className="beauty-input" placeholder="Nombre" value={this.state.product.Name} name="Name" onChange={this.handleChange}></input>
                <input className="beauty-input" placeholder="Precio" value={this.state.product.Price} name="Price" onChange={this.handleChange}></input>
                <label>Kilo</label>
                <input type="radio" name="Kilo" 
                checked={this.state.product.Unity == "Kilo" ? true : false}
                onChange={this.handleChangeRadio}></input>
                <label>Unidad</label>
                <input type="radio" name="Unidad" 
                checked={this.state.product.Unity == "Unidad" ? true : false}
                onChange={this.handleChangeRadio}></input>
                <a className="beauty-btn green" onClick={this.addProduct}>Guardar</a>
            </div>
        )
    }

    handleChange = (event)=>{       
        this.setState({
            product:{
                ...this.state.product,
                [event.target.name] : event.target.value
        }});
    }

    handleChangeRadio = (event)=>{
        this.setState({
            product:{
                ...this.state.product,
                Unity : event.target.name
        }});
    }

    addProduct = ()=>{
        Axios.post(getBaseApiUrl() + "/product", this.state.product).then(response=>{
            console.log(response);
            this.props.refreshProducts();
        });
    }
}

export default AddProduct
