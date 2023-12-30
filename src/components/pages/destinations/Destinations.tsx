import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./Destinations.module.scss";
import { useHistory } from "react-router-dom";

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
        <Container className="w-100">
          <Row>
            <Col className="home-about-description my-auto pl-20">
              <div className="text-start heading row textColor">
                <h1
                  className="fit-content text-shadow-dark heading d-flex pl-0 fw-bold"
                  style={{ color: "#266d59" }}
                  onClick={() => {
                    history.push("/explore");
                  }}
                >
                  Check all Possible Destinations
                </h1>
                {/* <button
                  className={`btn fit-content position-relative btn-circle btn-info d-flex justify-items-center align-self-center p-4 ${style.navigationButton}`}
                  onClick={() => {
                    history.push("/explore");
                  }}
                >
                  <Col xs={4} className="social-icons align-self-center w-100">
                    <FaArrowRightLong />
                  </Col>
                </button> */}
              </div>
              <p className="text-dark-green text-start ome-about-body home-text">
                With each step, we take on foreign soil, we unravel the
                mysteries of diverse traditions, forge meaningful connections
                and expand our views on life. The dream of exploring the world
                is a testament to our innate desire for growth, knowledge and a
                deep understanding of the interconnections that binds us all.
              </p>
            </Col>
          </Row>
        </Container>
        <div className={`${style.downImage} position-absolute`}></div>
      </Container>
    </>
  );
};

export default Destinations;
