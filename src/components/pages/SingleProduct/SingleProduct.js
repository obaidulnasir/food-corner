import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import Navigation from '../../shared/Navigation/Navigation';

const SingleProduct = () => {
    const { user } = useFirebase();
    const [product, setProduct] = useState();
    const [allProduct, setAllProduct] = useState([]);

    const user1 = user?.email;
    const { id } = useParams();
    const data = {
        product: product,
        user: user1
    };

    
    useEffect(() => {
        fetch("http://localhost:5000/allProduct")
            .then(res => res.json())
            .then(data => setAllProduct(data));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    // add to cart 
    const addCart = () => {
        console.log(data);
        fetch("http://localhost:5000/addToCart", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Product added IN 🛒");

            });
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="my-5">
                <Container>
                    <Row xs={1} md={2}>
                        <Col>
                            <img src={product?.imgLink} className="img-fluid" width="70%" alt={product?.title} />
                        </Col>
                        <Col>
                            <div className="p-4">
                                <div>
                                    <h4 className="fs-2 fw-bold">{product?.title}</h4>
                                    <p>{product?.description}</p>
                                </div>

                                <div>
                                    <div>
                                        <button onClick={() => { addCart() }} className="order-button"><h5 style={{ color: "#fff" }}>Add to Cart</h5></button>
                                    </div>
                                    <div>
                                        <button className="order-button mt-2"><h5 style={{ color: "#fff" }}>Buy Now</h5></button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="my-5">
                    <Row className="text-center">
                        <Col>
                            <p className="fs-3">People Chose Also</p>

                        </Col>
                    </Row>
                    <Row xs={1} md={3} className="g-4">
                        {
                            allProduct.slice(1,4).map((ap)=>(
                                <Col>
                                <Card className="p-3">
                                    <Card.Img variant="top" src={ap.imgLink} />
                                    <Card.Body>
                                        <h5 className="fw-bold">{ap.title}</h5>
                                        <Card.Text>
                                           {ap.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <button  className="order-button"><h5 style={{ color: "#fff" }}>ADD TO CART</h5></button>
                                </Card>
                            </Col>
                            ))
                        }
                       
                       
                        {/* ))} */}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default SingleProduct;