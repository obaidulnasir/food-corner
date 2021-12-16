import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./Category.css"
import img1 from "./img/img-2.png";
import img2 from "./img/img-3.png";
import img3 from "./img/img-4.png";

const Category = () => {
    return (
        <div className="my-5">
            <Container>
                <Row className="d-flex justify-content-center">
                    <div style={{ backgroundImage: `url(${img1})` }} className=" banner-images1 col-sm-12 col-md-6 mt-2">
                       <p>TRY IT TODAY</p>
                       <p>MOST POPULAR BURGER</p>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div style={{ backgroundImage: `url(${img2})` }} className=" banner-images col-12 mx-2 mt-2">
                                
                            </div>
                            <div style={{ backgroundImage: `url(${img3})` }} className=" banner-images col-12 mx-2 mt-2">
                               <h3 className="text-white">hello</h3>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Category;