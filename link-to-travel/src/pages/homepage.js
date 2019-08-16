import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class Homepage extends Component{
    render(){
        return(      
            <div className="HomeContanier">
                <Header />
                <h1>Is Homepage here.</h1>
                <Footer name="Page ended"> this is Fopter components.</Footer>
            </div>
        );
    }
}

export default Homepage