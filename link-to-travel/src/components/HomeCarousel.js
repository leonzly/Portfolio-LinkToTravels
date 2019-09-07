import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class HomeCarousel extends Component {
    render() {

        const images = [
            { src: require('../assets/image/a.jpg'), alt: 'Your description here 1', title: 'First slide label', description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.' },
            { src: require('../assets/image/b.jpg'), alt: 'Your description here 2', title: 'Second slide label', description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.' },
            { src: require('../assets/image/c.jpg'), alt: 'Your description here 3', title: 'Third slide label', description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.' },
            { src: require('../assets/image/d.jpg'), alt: 'Your description here 4', title: 'Fouth slide label', description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.' },
            { src: require('../assets/image/e.jpg'), alt: 'Your description here 5', title: 'Fifty slide label', description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.' }
        ];

        return (
            <div className="BannarContorller">
                <Carousel>
                    {images.map(function (imageProps) {
                        return (
                            <Carousel.Item>
                                <div className="bannerSrc" style={{ backgroundImage: `url(${imageProps.src})` }}></div>
                                <Carousel.Caption>
                                    <h3>{imageProps.title}</h3>
                                    <p>{imageProps.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </div>
        );
    }
}
export default HomeCarousel

