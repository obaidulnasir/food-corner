import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Navigation from '../../shared/Navigation/Navigation';
import "./Shop.css"

const Shop = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div>
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        <Col>
                            <Card className="p-3">
                                <Card.Img variant="top" src="s.jpg" />
                                <Card.Body>
                                    <p className="fw-bold">Card TITLE</p>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <button className="order-button"><h5 style={{ color: "#fff" }}>Buy</h5></button>
                            </Card>
                        </Col>
                        <Col>
                           
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Shop;