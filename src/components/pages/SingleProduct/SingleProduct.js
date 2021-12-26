import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Navigation from '../../shared/Navigation/Navigation';

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id])
    return (
        <div>
            <Navigation></Navigation>
            <div>{product?.title}</div>
            <div className="my-5">
                <Container>
                    <Row xs={1} md={2}>
                        <Col>
                            <img src={product?.imgLink} width="60%" alt={product?.title} />
                        </Col>
                        <Col>
                            <div className="p-4">
                                <div>
                                    <p className="fs-2 fw-bold">{product?.title}</p>
                                </div>
                                <div>
                                    <Link to={`/product/}`}>
                                        <button className="order-button mx-2"><h5 style={{ color: "#fff" }}>Add to Cart</h5></button>
                                    </Link>
                                    <Link to={`/product/}`}>
                                        <button className="order-button mx-2"><h5 style={{ color: "#fff" }}>Buy Now</h5></button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default SingleProduct;