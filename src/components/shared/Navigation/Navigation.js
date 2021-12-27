import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import "./Navigation.css"

const Navigation = () => {
    const { user, handleLogout } = useFirebase();
    const [userCart, setUserCart] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/cart/${user?.email}`)
        .then(res => res.json())
        .then(data => setUserCart(data));
      },[user?.email]);
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
                            {/* <Link to="/login">
                                <button className="btn btn-danger">
                                    <i class="bi bi-person-circle"></i>
                                </button>
                            </Link> */}
                            <Link to="/cart">
                            <button className="btn btn-danger mx-1">
                                <i class="bi bi-basket"></i>
                                {
                                userCart?.length? <sup className="bg-warning fw-bold fs-4"> {userCart?.length} </sup> : <span> </span>
                                }
                            </button>
                            </Link>
                            {
                                user.email ? <button onClick={handleLogout} className="btn btn-danger">
                                    Logout
                                    <i class="bi bi-box-arrow-right"></i></button> :
                                    <Link to="/login">
                                        <button className="btn btn-light">Login
                                            <i class="bi bi-box-arrow-left"></i>
                                        </button>
                                    </Link>
                            }
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