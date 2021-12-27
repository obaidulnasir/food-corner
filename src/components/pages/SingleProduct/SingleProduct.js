import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import Navigation from '../../shared/Navigation/Navigation';

const SingleProduct = () => {
    const {user}=useFirebase();
    const [product, setProduct] = useState();

    const user1 = user?.email;
    const { id } = useParams();
    const data = {
        product: product,
        user: user1
    }
    
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);


    const addCart = ()=>{
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
                                    <div>
                                        <button onClick={()=>{addCart()}} className="order-button mx-2"><h5 style={{ color: "#fff" }}>Add to Cart</h5></button>
                                    </div>
                                    <div>
                                        <button className="order-button mx-2"><h5 style={{ color: "#fff" }}>Buy Now</h5></button>
                                    </div>
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