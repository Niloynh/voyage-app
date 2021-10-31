import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../AuthProvider/useAuth';

const Header = () => {
    const {user, userSignOut} = useAuth()
    return (
        <>
            <Navbar className="my-navbar" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/home#home" className="header-img"><img src="https://i.ibb.co/HFgbtwQ/logo-light.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="link-text justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" >Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/information">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/interesting">Destination</Nav.Link>
                        {user.email && <Nav.Link as={HashLink} to="/manageOrders">Manage All Orders</Nav.Link>}
                        {user.email && <Nav.Link as={HashLink} to="/addANewService">Add A New Order</Nav.Link>}
                         <span className="fw-bold text-info">{user.displayName}</span>
                        {user.email && <img className="img-size mx-2" src={user.photoURL} alt="" />}
                        {user.email ?
                        <button onClick={userSignOut} className="signOut-btn"><FontAwesomeIcon icon={faSignOutAlt} />  Log Out</button>
                        :
                        <Nav.Link as={HashLink} to="/login"><FontAwesomeIcon icon={faSignInAlt} />  Login</Nav.Link>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </> 
    );
};

export default Header;