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
                <input className="radio-button"  type="radio" name="Kilo" 
                checked={this.state.product.Unity == "Kilo" ? true : false}
                onChange={this.handleChangeRadio}></input>
                <label>Unidad</label>
                <input className="radio-button"  type="radio" name="Unidad" 
                checked={this.state.product.Unity == "Unidad" ? true : false}
                onChange={this.handleChangeRadio}></input>
                <br></br>
                 <label>Activo</label>
                <input className="radio-button"  type="radio" name="Activo" 
                checked={this.state.product.IsActive}
                onChange={this.handeChangeActive}></input>
                 <label>Desactivado</label>
                <input className="radio-button" type="radio" name="Desactivado" 
                checked={!this.state.product.IsActive}
                onChange={this.handeChangeActive}></input>
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

    handeChangeActive = (event)=>{
        this.setState({
            product:{
                ...this.state.product,
                IsActive : event.target.name == "Activo" ? true : false
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
            this.props.modalControl();
            this.props.refreshProducts();
        });
    }
}

export default AddProduct
