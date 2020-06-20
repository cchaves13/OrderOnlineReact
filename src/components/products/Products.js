import React, { Component } from 'react'
import axios from 'axios';

class Products extends Component {

   
    constructor(props) {
        super(props)
        
        this.state = {
                 products: []
        }
    }

    

    componentDidMount(){
      axios.get("http://localhost:65437/api/product").then(res=> {
        console.log(res);
      });
    }

    render() {
        return (
            <div>
                <h1>Productos</h1>
                <table className="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Products;
