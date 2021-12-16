import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import event from "./img/event.png"

const EventSection = () => {
    return (
        <div>
            <div className="my-5">
                <Container>
                    <Row>
                        <Col className="shadow ">
                            <Row className="d-flex align-items-center">
                                <div className="col-md-6 p-4">
                                    <div>
                                    <p>DISCOVER</p>
                                    <h3>UPCOMING EVENTS</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere voluptate expedita nesciunt animi a odio odit harum tenetur quia praesentium sunt totam? Laboriosam ea distinctio ipsa molestiae nostrum, accusantium dolores cum, voluptatem, quasi tempora aspernatur reiciendis delectus tempore atque?</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src={event} width="80%" alt="" />
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default EventSection;