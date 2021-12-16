import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"
import footer from "./img/footer.png"


const Footer = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${footer})` }} className="footer-background py-5">
                <Container>
                    <Row>
                        <div className="col-md-6">
                            <div>
                                <h2 className="text-white">Food Corner</h2>
                                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. At eligendi tempora reprehenderit, aut officia, mollitia expedita nobis culpa soluta rerum cum cupiditate vel placeat quis nam iure maiores veritatis praesentium tenetur? Officiis, neque tempore.</p>
                            </div>
                        </div>
                    </Row>
                    <hr style={{color:"#FFF"}}/>
                    <Row className="d-flex justify-content-between">
                        <Col className="text-white"></Col>
                        <Col className="text-white"></Col>
                        <Col className="text-white">Social Icon</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;