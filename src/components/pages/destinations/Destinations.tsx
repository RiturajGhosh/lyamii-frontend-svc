import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import style from "./Destinations.module.scss";
import { useHistory } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";

const Destinations: FC = () => {
  const history = useHistory();
  return (
    <>
      <Col
        className="home-about-section sectionContainer d-flex justify-content-center py-42 px-0"
        id="about"
      >
        <div
          className={`${style.bgImage} zi-2 w-30 end-0 top-50 translate-middle-y position-absolute`}
        ></div>

        <Col lg={11} md={11} sx={11} xs={11} className="">
          <Row className="bg-white p-3 m-0 form__input">
            <Col className="home-about-description pl-20">
              <div className="text-start heading row textColor">
                <span
                  className="fit-content text-shadow-dark fs-7 d-flex pl-0 fw-bold"
                  style={{ color: "#0852A1", fontFamily: "ArtNuvo" }}
                  onClick={() => {
                    history.push("/explore");
                  }}
                >
                  Check all Possible Destinations
                </span>
                <Col className="col-1 d-flex text-shadow-dark align-self-center position-relative p-0 m-0">
                  <FaCircleArrowRight
                    size={"calc(0.025*100vw"}
                    fill={"#0752a0"}
                    onClick={() => {
                      history.push("/explore");
                    }}
                  />
                </Col>
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
              <p
                className="text-dark text-start ome-about-body home-text p-0 m-0"
                style={{ color: "black", fontFamily: "Bellota" }}
              >
                With each step, we take on foreign soil, we unravel the
                mysteries of diverse traditions, forge meaningful connections
                and expand our views on life. The dream of exploring the world
                is a testament to our innate desire for growth, knowledge and a
                deep understanding of the interconnections that binds us all.
              </p>
            </Col>
          </Row>
        </Col>
        {/* <div className={`${style.downImage} p-0 m-0 position-absolute`}></div> */}
      </Col>
    </>
  );
};

export default Destinations;
