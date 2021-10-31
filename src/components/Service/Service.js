import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './Service.css';
import { Link } from 'react-router-dom';


const Service = (props) => {
    const {img, tour, description, price, rate, valid} = props.service
    return (
        <Col>
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title><h4 className="my-3">{tour}</h4><span className="text-info fw-bold">${price}</span></Card.Title>
            <Card.Text>
            <p className="my-3 fw-bold fstat-skip text-muted">{rate}</p>
                <br />
               <p className="fs-5 text-muted">{description}</p>
               <hr />
               <div className="d-flex justify-content-between">
                    <span className="valid"> <FontAwesomeIcon icon={faClock} /> {valid}</span>
                    <Link to="/placeOrder">
                    <button className="regular-btn">Place Order</button>
                    </Link>
               </div>
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Service;<h2>Service</h2>