import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
      <>
         <Carousel>
                <Carousel.Item className="carousel-item">
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Nm4Jf8M/home-1-slide-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <h3>Adventure is Worthwhile </h3>
                   
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/2NMYCP2/home-1-slide-2.jpg"
                    alt="Second slide"
                />
            
                <Carousel.Caption>
                    <h3>Traveling Together </h3>
                    
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/nPQqxTr/home-1-slide-4.jpg"
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>Incredible Journey</h3>
                    
                </Carousel.Caption>
                </Carousel.Item>
         </Carousel>
    </>
    );
};

export default Banner;