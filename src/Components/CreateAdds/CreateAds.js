import React from "react";
import "./CreateAds.css";
import { Container, Row, Col, Card ,Button} from "react-bootstrap";
import TestAd from '../../Assets/TextAd.png'
import MediaAd from '../../Assets/MediaAd.png'
import { Link } from "react-router-dom";

function CreateAds() {
  
  return (
    <div className="cards">
      <h5>Create Ads</h5>
      <Container>
        <Row className="createAdCard py-5 text-center m-auto">
          <Col md={6} className="Card1">
            <Card className="TextAdCard1" style={{ width: "16rem" }}>
            <Link to="/TextAd"><input type="checkbox" className="checkbox"></input></Link>
              <Card.Img variant="top" src={TestAd} className="cardImg"/>
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle">Create</Card.Title>
                <Card.Text className="cardText">
                 <h5>Text Ad</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="Card2">
            <Card className="TextAdCard2" style={{ width: "16rem" }}>
            <Link to="/MediaAd"><input type="checkbox" className="checkbox"></input></Link>
              <Card.Img variant="top" src={MediaAd} className="cardImg" height={320}/>
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle">Create</Card.Title>
                <Card.Text className="cardText">
                 <h5>Media Ad</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <div className="cardButton">
          <Button variant="primary" className="ml-2">Next</Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default CreateAds;
