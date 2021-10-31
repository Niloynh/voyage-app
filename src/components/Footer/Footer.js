import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <div className="footer-container">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <div className="py-5 footer-img">
                            <img src="https://i.ibb.co/xzvchBC/logo-footer-light.webp" alt="" />

                            <h5>Nullam ac justo efficitur, tristique ligula. Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin.</h5>

                            <div className="text mt-5">
                                <div  className="footer-text">
                                    <div className="icon"><FontAwesomeIcon icon={faPhone} /></div>
                                    <div><p>1-677-124-44227</p></div>
                                </div>
                                <div  className="footer-text">
                                    <div className="icon"><FontAwesomeIcon icon={faLocationArrow} /></div>
                                    <div><p>184 Main Street West Victoria 8007</p></div>
                                </div>
                                <div className="footer-text">
                                    <div className="icon"><FontAwesomeIcon icon={faTimesCircle} /></div>
                                    <div><p>Mon - Sat 8.00 - 18.00 Sunday CLOSED</p></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="py-5 footer-news text-center">
                            <h2>Latest News</h2>
                            <p  className="my-5">Water & Rocks: Discovering the Beauty of New Zealand </p>
                            <span>29.10.2021</span>
                        </div>
                        <hr />
                        <div  className="footer-news text-center">
                            <p>Updates: People Who Work Overseas and Fly For Free</p>
                            <span>29.10.2021</span>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>

                    <div className="py-5 footer-news text-center d-block">
                            <h2 className="mb-5">Support</h2>
                            <div className="suport-p">
                                <p>Troubleshooting</p>
                                <p>Common Questions</p>
                                <p>Report a Bug</p>
                                <p>Get Help</p>
                            </div>
                        </div>
                      
                    </Col>
                    <hr />
                    <div className="my-3 text-light fs-6 text-center"> © 2021 Qode Interactive, All Rights Reserved</div>
                </Row>
            </Container>
        </div>
        
    );
};

export default Footer;