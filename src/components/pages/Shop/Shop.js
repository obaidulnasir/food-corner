import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Navigation from '../../shared/Navigation/Navigation';
import "./Shop.css"
import cardBg1 from "./img/collection-1.104f02d0.jpg";
import cardBg2 from "./img/shop-1.jpg";
import { Link } from 'react-router-dom';
// import SingleProduct from '../SingleProduct/SingleProduct';


const Shop = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allProduct")
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <div>
                <div><p>Total Product: {product.length}</p></div>
                <Container>
                    <div className="my-5">
                        <p className="fs-3">Explore Your Collection</p>
                    </div>
                    <Row xs={1} md={2} className="g-4">
                        <Col className="hover-card">
                            <div style={{ backgroundImage: `url(${cardBg1})` }} className="card-bg rounded">
                                <div>
                                    <button className="my-2 mx-2">Trending Food</button>
                                </div>
                            </div>
                        </Col>
                        <Col className="hover-card">
                            <div style={{ backgroundImage: `url(${cardBg2})` }} className="card-bg rounded">
                                <div>
                                    <button className="my-2 mx-2">Trending Food</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="my-5">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            product.map(pd => (
                                <Col>
                                    <Card className="p-3">
                                        <Card.Img variant="top" src={pd.imgLink} />
                                        <Card.Body>
                                            <p className="fw-bold">{pd.title}</p>
                                            <Card.Text>
                                                {pd.description}
                                            </Card.Text>
                                        </Card.Body>
                                        <Link to={`/product/${pd._id}`}>
                                            <button className="order-button"><h5 style={{ color: "#fff" }}>Buy</h5></button>
                                        </Link>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Shop;