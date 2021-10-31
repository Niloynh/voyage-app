import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Interesting = () => {
    return (
        <div className="py-5 service-container">
            <div className=" container">
            <div className="text-center service-text">
                <h2 className="pt-5">Interesting Facts</h2>
                <p className="pb-3">Nullam ac justo efficitur, tristique ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus. In sed viverra dui. Suspendisse laoreet velit at eros eleifend.</p>
            </div>

            <div>
                <Row xs={12} md={1} className="g-4 my-5">
                    <Col className="d-md-flex">
                    <div>
                        <Card.Img variant="top" src="https://i.ibb.co/6B2JqPJ/carousel-1-1.webp"/>
                        <Card.Body className="text-center">
                        <Card.Title>China</Card.Title>
                        <Card.Text>
                            <p>The Forbidden City is a complex in beijing</p>
                        </Card.Text>
                        </Card.Body>
                    </div>
                    <div>
                        <Card.Img variant="top" src="https://i.ibb.co/BqDzM2K/carousel-1-2.webp"/>
                        <Card.Body className="text-center">
                        <Card.Title>London</Card.Title>
                        <Card.Text>
                            <p>"Big Ben" is not the tower</p>
                        </Card.Text>
                        </Card.Body>
                    </div>
                    <div>
                        <Card.Img variant="top" src="https://i.ibb.co/XV2p5SB/carousel-1-3.webp"/>
                        <Card.Body className="text-center">
                        <Card.Title>India</Card.Title>
                        <Card.Text>
                            <p>In West Bengal cows must have An ID Card</p>
                        </Card.Text>
                        </Card.Body>
                    </div>
                    <div>
                        <Card.Img variant="top" src="https://i.ibb.co/H2YfJrt/carousel-1-4.webp"/>
                        <Card.Body className="text-center">
                        <Card.Title>New York</Card.Title>
                        <Card.Text>
                            <p>The Statue of Liberty is 101 feet tall</p>
                        </Card.Text>
                        </Card.Body>
                    </div>
                    <div>
                        <Card.Img variant="top" src="https://i.ibb.co/dbQH6MJ/carousel-1-5.webp"/>
                        <Card.Body className="text-center">
                        <Card.Title>Mexico</Card.Title>
                        <Card.Text>
                            <p>Chilhuahua is the name of a Mexican state</p>
                        </Card.Text>
                        </Card.Body>
                    </div>
                    <div>
                        <Card.Img variant="top" src="https://i.ibb.co/fqJrmsY/carousel-1-6.webp"/>
                        <Card.Body className="text-center">
                        <Card.Title>Italy</Card.Title>
                        <Card.Text>
                            <p>Pizza was invented in Naples</p>
                        </Card.Text>
                        </Card.Body>
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
        </div>
    );
};

export default Interesting;