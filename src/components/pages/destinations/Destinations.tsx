import React, { FC } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import style from "./Destinations.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { useHistory } from "react-router-dom";
import destinationMap from "../../../Assets/map.jpg";

const Destinations: FC = () => {
  const history = useHistory();
  return (
    <>
      <div className={`${style.bgImage} position-absolute`}></div>
      <Container
        className={`home-about-section position-relative sectionContainer py-42`}
        fluid
        id="about"
      >
        <Container>
          <Row>
            <Col md={7} className="home-about-description my-auto pl-20">
              <div className="text-start heading row textColor">
                <h1 className="col-lg-10 col-xl-11 text-shadow-dark col-md-10 heading col-sm-9 col-10 d-flex pl-0 fw-bold">
                  Check all possible destinations
                </h1>
                <button
                  className={`btn col-1 position-relative btn-circle btn-info d-flex justify-items-center align-self-center ${style.btmRght} p-4 ${style.navigationButton}`}
                  onClick={() => {
                    history.push("/explore");
                  }}
                >
                  <Col xs={4} className="social-icons align-self-center w-100">
                    <FaArrowRightLong />
                  </Col>
                </button>
              </div>
              <p className="text-start ome-about-body home-text">
                With each step, we take on foreign soil, we unravel the
                mysteries of diverse traditions, forge meaningful connections
                and expand our views on life. The dream of exploring the world
                is a testament to our innate desire for growth, knowledge and a
                deep understanding of the interconnections that binds us all.
              </p>
            </Col>

            <Col md={5} className="align-self-center">
              <Image
                className={`w-100 p-0 rounded-3`}
                src={destinationMap}
              />
            </Col>
          </Row>
        </Container>
        <div className={`${style.downImage} position-absolute`}></div>
      </Container>
    </>
  );
};

export default Destinations;
