import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BurgerCard from './Card/BurgerCard';
import "./ProductSection.css"

const ProductSection = () => {
   
    return (
        <div className="text-center">
            <Container className="my-5">
              <Row>
                  <Col>
                  <div className="my-2">
                    <span className="text-background p-2">ALWAYS TESTIS BURGER</span>
                </div>
                <div className="my-4">
                    <h3 className="fs-1">Choose & Enjoy</h3>
                    <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis illo in nulla repudiandae. Impedit, dolorem molestias illo at a temporibus totam, porro ipsum provident voluptas iste voluptate quisquam repellendus quaerat aliquam! Neque eum aliquid delectus. Vitae non maiores ratione molestias?</p>
                </div>
                  </Col>
              </Row>
              <Row>
                  <BurgerCard></BurgerCard>
              </Row>
            </Container>
        </div>
    );
};

export default ProductSection;