import React from 'react';
import { Card, Col, Row, } from 'react-bootstrap';
import "./BurgerCard.css"
import burger1 from "../img/burger-1.png";
import burger2 from "../img/burger-2.png";
import burger3 from "../img/burger-3.png";


const BurgerCard = () => {
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
          <Col>
            <Card className="p-3">
              <Card.Img variant="top" src={burger1} />
              <Card.Body>
                <p className="fw-bold">Card TITLE</p>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <button className="order-button"><h5 style={{color:"#fff"}}>Buy</h5></button>
            </Card>
          </Col>
          <Col>
            <Card className="p-3">
              <Card.Img variant="top" src={burger2} />
              <Card.Body>
                <p className="fw-bold">Card TITLE</p>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <button className="order-button"><h5 style={{color:"#fff"}}>Buy</h5></button>
            </Card>
          </Col>
          <Col>
            <Card className="p-3">
              <Card.Img variant="top" src={burger3} />
              <Card.Body>
                <p className="fw-bold">Card TITLE</p>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <button className="order-button"><h5 style={{color:"#fff"}}>Buy</h5></button>
            </Card>
          </Col>
        {/* ))} */}
      </Row>
    </div>
  );
};

export default BurgerCard;