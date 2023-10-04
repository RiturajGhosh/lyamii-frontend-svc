import React, { FC } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Destinations from "../destinations/Destinations";
import style from "./Home.module.scss";
import Wave from "../../common/icon/waveBottom";
import Globe from "../../common/globe/Globe";
import BorderCard from "../../common/borderCard/BorderCard";
import CardWithoutBorder from "../../common/cardWithoutBorder/CardWithoutBorder";

const Home: FC = () => {
  const mapDescription =
    "Explore stunning destinations, from exotic tropical paradises to historic landmarks and vibrant cityscapes with Lyamii.";

  const array = [{
    image: '',
    description: ''
  },{
    image: '',
    description: ''
  },{
    image: '',
    description: ''
  }]
  return (
    <section>
      <Container
        fluid
        className={`home-section position-relative ${style.imageSection}`}
        id="home"
      >
        <Container className="home-content d-grid justify-content-center">
          <h1 className="text-center">Meet your </h1>
          <h1 className="text-center">"SOUL"</h1>
          <p className="text-center">
            Explore stunning destinations, from exotic tropical paradises to
            historic landmarks and vibrant cityscapes with Lyamii. Get insider
            insights into must see attractions, local cuisine, cultural
            experiences, and hidden gems. we Lyamii, a tour and travel company
            based in India. We have a selection of tours that showcase the best
            of worlds culture, nature and history. Lyamii will provide you with
            excellent service and support throughout your journey.
          </p>
          <Button className="align-middle justify-self-center">
            Get Started
          </Button>
        </Container>
        <div className="flex-grow-1">
          <Wave></Wave>
        </div>
      </Container>
      <Destinations></Destinations>
      <Container className="home-about-section py-42" fluid id="about">
        <Container>
          <Row>
            <Col md={7} className="">
              <BorderCard
                title="Play with MAP"
                text={mapDescription}
                minHeight="630px"
                buttonColor='bg-warning'
                className={`border-5 pt-32 shadow-lg justify-content-start ${style.bgBluePink}`}
              >
                <div style={{ width: "25%", height: "25%" }}>
                  <Globe />
                </div>
              </BorderCard>
            </Col>
            <Col md={5} className="">
              <BorderCard
                title="The Escape Plan"
                text={mapDescription}
                minHeight="630px"
                buttonColor='bg-yellow'
                className="border-5 shadow-lg bg-dark mh-2 text-white"
                imageAbove={
                  "https://cdn.pixabay.com/photo/2016/08/05/15/06/tunnel-1572456_1280.jpg"
                }
              ></BorderCard>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="home-about-section py-4" fluid id="about">
        <Container>
          <Row>
            <div className="card-body w-25">
              {<p className="card-text text-primary ft-32">So why</p>}
              {<h1 className="card-title text-secondary ft-57">Lyamii ?</h1>}
            </div>
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col style={{ width: "300px" }} key={idx}>
                  <Card style={{ width: "300px" }}>
                    <Card.Img
                      variant="top"
                      src="https://cdn.pixabay.com/photo/2016/08/05/15/06/tunnel-1572456_1280.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>{mapDescription}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Row>
        </Container>
      </Container>
      <Container className="home-about-section py-4" fluid id="about">
        <Container>
          <Row>
            <div className="card-body w-25">
              {
                <p className="card-text text-primary ft-32">
                  What our Customers say?
                </p>
              }
            </div>
            <Row xs={1} md={2} className="g-4">
              {array.map((_, idx) => (
                <Col key={idx}>
                  <Card style={{ width: "100%" }}>
                    <Card.Img
                      variant="top"
                      src="https://cdn.pixabay.com/photo/2016/08/05/15/06/tunnel-1572456_1280.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>{mapDescription}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Home;
