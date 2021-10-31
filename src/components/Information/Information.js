import React from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import './Information.css';

const Information = () => {
    return (
        <div className="py-5">
            <div  className="text-center service-text">
                <h2 className="pt-5">Other Useful Information</h2>
                <p className="pb-3">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
            </div>
            <Container>
            <Row xs={1} md={3} className="g-4 my-5">
                    <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/gwN7rsc/home-1-image-1.jpg" />
                        <Card.Body  className="py-5">
                        <Card.Title className="fs-4 mb-3">Private Guide Tour</Card.Title>
                        <Card.Text className="card-text">
                            Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/HKwwT6c/home-1-image-2.jpg" />
                        <Card.Body className="py-5">
                        <Card.Title className="fs-4 mb-3">Special Activities</Card.Title>
                        <Card.Text className="card-text">
                            Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi suspendisse ultrices.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0" className="pb-2">
                            <Accordion.Header><h5>Sightseeing Tour Booking</h5></Accordion.Header>
                            <Accordion.Body className="fs-5 py-5 card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="py-2">
                            <Accordion.Header><h5>Paris Honeymoon</h5></Accordion.Header>
                            <Accordion.Body className="fs-5 py-5 card-text">
                                Nullam ac justo efficitur, tristique ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="py-2">
                            <Accordion.Header><h5>South Africa Adventure</h5></Accordion.Header>
                            <Accordion.Body className="fs-5 py-5 card-text">
                                Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar blandit tortor.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="py-2">
                            <Accordion.Header><h5>Easter Islands Special Offer</h5></Accordion.Header>
                            <Accordion.Body className="fs-5 py-5 card-text">
                                Nam sed lobortis ante, sit amet mattis purus. Nunc tincidunt mollis felis, sed bibendum ligula auctor et. Etiam a erat sit amet.
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Information;