import React, { FC } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { mapDescription } from "../../common/enum/enum";

const WhyLyamii: FC = () => {
  return (
    <Container className="home-about-section py-4" fluid id="about">
      <Container>
        <Row>
          <Col md={2} className="card-body m-auto w-25">
            {<p className="card-text text-primary ft-32">So why</p>}
            {<h1 className="card-title text-secondary ft-57">Lyamii ?</h1>}
          </Col>
          <Col md={8} className="justify-content-between d-flex">
            {Array.from({ length: 2 }).map((_, idx) => (
              <Col key={idx}>
                {Array.from({ length: 2 }).map((_, idx) => (
                  <Card style={{ maxWidth: "500px" }} className="my-2 mx-1">
                    <Card.Img
                      variant="top"
                      src="https://cdn.pixabay.com/photo/2016/08/05/15/06/tunnel-1572456_1280.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>{mapDescription}</Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </Col>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WhyLyamii;
