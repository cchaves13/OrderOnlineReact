import React, { Component } from 'react'
import './Home.scss'
import Slideshow from '../slideshow/Slideshow'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <Slideshow></Slideshow>
            </div>
        )
    }
}

export default Home;
