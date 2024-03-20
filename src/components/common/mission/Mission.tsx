import React, { FC } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { internationalTours } from "../enum/enum";
import { useSelector } from "react-redux";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";

const Mission: FC = () => {
  const screenSize = useSelector(selectScreenSize);
  return (
    <Row md={12} lg={12} className="position-relative">
      {screenSize.screenSize > 767 && <Col className="col-1"></Col>}
      <Col md={11} lg={11} className="col-12 p-0 m-0">
        <Col className="mt-3" id="#mission">
          <Col className="mt-5 mx-4 justify-content-start align-self-end d-flex">
            <span className="display-3 text-dark text-start fw-bold">
              Mission
            </span>
          </Col>
          <Col className="product-list" onScroll={(e) => {}}>
            {internationalTours.map((option, idx) => (
              <Col onClick={() => {}} key={idx} sm={12} xs={12}>
                <Card className={`my-2 mx-1`} style={{ background: "#d9b246" }}>
                  <Card.Body className="p-0">
                    <p className="text-wrap text-dark p-3">
                      With boundless vision and an insatiable curiosity for the
                      World, we're aiming to redefine the world of World Tourism
                      and inspire a new generation of Wanderers. We believe in
                      the growth of the Travellers community, and its impact
                      around the globe. Our team will take care of your air
                      tickets, VISA documentation, travel insurance, currency
                      exchange, stays with energetic, comfortable & safe
                      accommodations, sidescenes, activities like snorkelling,
                      kayaking, desert stay, morning hiking, local food tours
                      and others. We work with no middleman to guarantee the
                      best pricing in every segment. Join us to execute your
                      perfect Escape Plan. Team Lyamii harnessed the power of
                      technology and the love for exploration to create a
                      complete system to benefit the passionate travellers
                      community around the globe.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Col>
        </Col>
      </Col>
    </Row>
  );
};

export default Mission;
