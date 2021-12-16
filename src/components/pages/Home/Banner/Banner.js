import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Banner.css'
import bannerImg from "./img/img-1.png"

const Banner = () => {
    return (
        <div className="banner App">
            <Container>
                <Row className="d-flex align-items-center">
                    <div className="col-md-5">
                        <p className="dashed-border fs-6">It is a good time for the great taste of burgers</p>
                        <h2 className=" banner-heading">Burger<span className="fs-3"> WEEK</span></h2>
                    </div>
                    <div className="col-md-7">
                        <img src={bannerImg} width="90%" alt="banner-img" />
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;