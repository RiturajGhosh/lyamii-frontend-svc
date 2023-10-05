import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import walkingFinger from "../../../Assets/boat.jpg";
import style from './Destinations.module.scss'

const Destinations: FC = () => {
  return (
    <Container className="home-about-section sectionContainer py-42" fluid id="about">
      <Container>
        <Row>
          <Col md={7} className="home-about-description my-auto pl-20">
            <h1 className="text-start ft-57 textColor">Check all</h1>
            <h1 className="text-start ft-57 textColor">the possible</h1>
            <h1 className="text-start ft-57 textColor">destinations</h1>
            <p className="text-start ome-about-body home-text">
              With each step, we take on foreign soil, we unravel the mysteries
              of diverse traditions, forge meaningful connections and expand our
              views on life. the dream of exploring the world is a testament to
              our innate desire for growth, knowledge and a deep understanding
              of the interconnections that binds us all.
            </p>
          </Col>
          <Col md={3} className="align-self-center">
            <img src={walkingFinger} className={`${style.img}`} alt="avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Destinations;
