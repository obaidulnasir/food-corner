import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navigation.css"

const Navigation = () => {
    return (
        <Navbar sticky="top" className="navigation" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand><Link className="nav-link" to="/home">FoodCorner</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Link className="nav-link" to="/shop">Shop</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <button className="btn btn-danger">
                                <i class="bi bi-basket fs-6"></i>
                            </button>
                        </Nav.Link>
                        <Nav.Link>
                            
                        </Nav.Link>
                        
                        {/* <Nav.Link eventKey={2} href="#memes">
                       
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;