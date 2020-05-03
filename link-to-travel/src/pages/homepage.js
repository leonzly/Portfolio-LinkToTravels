import React, { Component } from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Carousel from '../components/HomeCarousel';
import Profile from '../components/User/profile';
import NHeader from '../components/Header/nheader';

class Homepage extends Component{
    render(){
        return(      
            <div className="HomeContanier">
                <NHeader/>

                {/* <Header />
                <Carousel />
                <Profile />
                <Footer name="Page ended"> this is Fopter components.</Footer> */}
            </div>
        );
    }
}

export default Homepage