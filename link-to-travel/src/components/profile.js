import React, { Component } from 'react'
import AboutUs from './aboutUs';

class profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName :'Leon'
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }

    render() {
        return (
            <div>                
                <AboutUs greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default profile
