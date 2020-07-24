import React, { Component } from 'react'
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from './components/products/Products';
import Clients from './components/clients/Clients';
import Navigation from './components/website/navigation/Navigation';
import Home from './components/website/home/Home';
import Shop from './components/website/Shop/Shop';
import CartButton from './components/website/CartButton/CartButton';
import Sidebar from './components/website/Sidebar/Sidebar';
import ConfirmationScreen from './components/website/ConfirmationScreen/ConfirmationScreen';




class App extends Component {
  constructor(props) {
    super(props)
    let event = new Event("customEvent", {data:{}});
    this.state = {
         showSidebar:false,
         customEvent: event
    }
  }

  toggleSidebar = ()=>{
    if(this.state.showSidebar){
      var sideBar = document.getElementById('sideBar');
      sideBar.classList.toggle('sidebar-active');      
      setTimeout(()=>{
        this.setState({showSidebar: false});   
        
      },500)
      document.dispatchEvent(this.state.customEvent);     
    }else{
      this.setState({showSidebar: true});
      setTimeout(()=> {
        if(this.state.showSidebar){
          var sideBar = document.getElementById('sideBar');
          sideBar.classList.toggle('sidebar-active');          
        }        
      })
    }
  }

  updateProduct = ()=>{

  }

  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">         
        <Navigation></Navigation>      
        </header>
        <CartButton toggleSidebar={this.toggleSidebar}></CartButton>
        {this.state.showSidebar ? <Sidebar toggleSidebar={this.toggleSidebar} updateProduct={this.updateProduct}></Sidebar> : null}
        {/* <Sidebar toggleSidebar={this.toggleSidebar}></Sidebar> */}
      </div>
      <Switch>        
        <Route path="/products">
          <Products></Products>
        </Route>
        <Route path="/tienda">
        <Shop></Shop>
        </Route>
        <Route path="/confirmacion">
        <ConfirmationScreen></ConfirmationScreen>
        </Route>
        <Route path="*">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    )
  }
}
export default App;
