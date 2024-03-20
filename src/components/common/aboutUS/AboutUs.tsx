import React, { FC } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { internationalTours } from "../enum/enum";
const AboutUs: FC = () => {
  return (
    <Col md={11} lg={11} className="position-relative">
      <Row className="" id="#aboutus">
        <Col className="mt-5 justify-content-end align-self-end d-flex">
          <span className="display-3 text-dark fw-bold">AboutUs</span>
        </Col>
        <div className="product-list" onScroll={(e) => {}}>
          {internationalTours.map((option, idx) => (
            <Col onClick={() => {}} key={idx} sm={12} xs={12}>
              <Card className={`my-2 mx-1`} style={{ background: "#d9b246" }}>
                <Card.Body className="p-0 w-md-75 justify-content-end">
                  <p className="text-wrap text-white p-3">
                    Driven by a shared belief that travel has the power to
                    broaden lifes, and is the key to self exploration, a group
                    of passionate travel enthusiasts set out to develop Lyamii,
                    a platform to present every corner of our planet on your
                    screen.
                  </p>
                  <p className="text-wrap text-dark p-3 pt-0">
                    Throughout history, our ancestors traversed vast terrains,
                    crossing continents in search of sustenance, shelter, and
                    new opportunities. The spirit of exploration flows within
                    our DNA, intertwining with our curiosity and thirst for
                    knowledge. It is encoded in the very fabric of our being.
                    urging us to step outside our comfort zones and immerse
                    ourselves in the wonders that lie beyond our horizons. This
                    genetic connection with travel fuels our desire to encounter
                    diverse cultures, witness awe-inspiring landscapes, and
                    engage with the intricate tapestry of humanity.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </Row>
    </Col>
  );
};

export default AboutUs;
