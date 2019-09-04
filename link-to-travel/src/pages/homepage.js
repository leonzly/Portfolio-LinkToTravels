import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Carousel from '../components/HomeCarousel';

class Homepage extends Component{
    render(){
        return(      
            <div className="HomeContanier">
                <Header />
                <Carousel />
                <h1>Content here...</h1>
                <Footer name="Page ended"> this is Fopter components.</Footer>
            </div>
        );
    }
}

export default Homepage