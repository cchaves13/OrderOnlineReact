import React from 'react';
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

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">          
        </header>
      </div>
      <Switch>
        <Route path="/products">
          <Products></Products>
        </Route>
        <Route path="/clientes">
          <Clients></Clients>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
