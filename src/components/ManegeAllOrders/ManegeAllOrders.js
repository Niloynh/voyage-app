import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ManegeAllOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://floating-brushlands-78451.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
// handelDelete
const handleDelete = id => {
    const procced = window.confirm('Are you sure you want to delete order')
    if(procced){
        fetch(`https://floating-brushlands-78451.herokuapp.com/orders/${id}`, {
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            alert('Deleted Successfully')
            const remaining = orders.filter(order => order._id !== id)
            setOrders(remaining)
        }
    })
    }
}
    return (
        <div className="my-5">
            <h1 className="my-5 text-uppercase text-info text-center">Manage All Orders</h1>
            <Row xs={1} md={2} className="g-4 px-5">
            {

                orders.map(order => <div key={order._id}>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={order.img} />
                            <Card.Body>
                            <Card.Title><h2>{order.tour}</h2></Card.Title>
                            <Card.Text>
                                <p className="fw-bold">{order.description}</p>
                                <span className="fw-bold text-info fs-4">${order.price}</span>
                                <hr />
                                <button onClick={() =>handleDelete(order._id)} className="regular-btn w-50 d-block mx-auto my-3 py-3">Delete</button>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                </div>)
            } 
            </Row>
        </div>
    );
};

export default ManegeAllOrders;