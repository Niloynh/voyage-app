import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://floating-brushlands-78451.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="py-5 service-container">
            <div className="text-center service-text">
                <h2 className="pt-5">Find Your Perfect Tour</h2>
                <p className="pb-3">Nullam ac justo efficitur, tristique ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus. In sed viverra dui. Suspendisse laoreet velit at eros eleifend.</p>
            </div>

            <div>
                
                {services.length === 0 ?
                 <span><Spinner animation="border" variant="warning" className="d-block mx-auto fs-5 mt-3"/></span>
                    :
                    <Row xs={1} md={3} className="g-4 container mx-auto my-5">
                    {
                        services.map(service => <Service
                        key="service._id"
                        service={service}
                        ></Service>)
                    }
                </Row>}
            </div>


        </div>

        
    );
};

export default Services;