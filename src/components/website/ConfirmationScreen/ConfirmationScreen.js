import React, { Component } from 'react'
import './ConfirmationScreen.scss';
import UserForm from './UserForm/UserForm';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux';



export default class ConfirmationScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 locationIsActive:false
        }
    }

    submit = values => {
        // print the form values to the console
        console.log(values)
      }

    toggleLocation = ()=>{
        this.setState({locationIsActive: !this.state.locationIsActive});
    }
    render() {       
        const rootReducer = combineReducers({
            // ...your other reducers here
            // you have to pass formReducer under 'form' key,
            // for custom keys look up the docs for 'getFormState'
            form: formReducer
          })
          
          const store = createStore(rootReducer)
        return (
            <div className="page-padding">
                <h1>Confirmacion de Pedido</h1>
                
              
                 <Provider store={store}>
                    <UserForm onSubmit={this.submit}></UserForm>
                 </Provider>

                 
            </div>
        )
    }
}
