import React, { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { IoMdMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";

const Contact: FC = () => {
  return (
    <Col
      className="home-about-section d-flex justify-content-center sectionContainer py-42"
      id="about"
    >
      <Col lg={11} md={11} sx={11} xs={11}>
        <Card.Body className="p-0 m-0">
          <Row className="justify-content-between d-flex p-0 m-0">
            <Col
              className="col-5 position-relative mt-5 pt-3 p-0 m-0"
              style={{
                color: "#218a43",
                textShadow: "#218a43",
              }}
            >
              <div className="w-100 position-relative">
                <Col
                  className="p-4 col-11 bold display-6 round-edges text-end w-100"
                  style={{
                    background: "#889dfe",
                    color: "white",
                    textShadow: "#218a43",
                    fontFamily: "bantayog",
                  }}
                >
                  <span
                    className="fs-24 d-flex justify-content-center text-center text-shadow-dark bold text-white"
                    style={{ fontFamily: "Archivo Black" }}
                  >
                    Any Quarries !
                  </span>
                  <span
                    className="fs-16 d-flex justify-content-center"
                    style={{ color: "#0752a1", fontFamily: "Futura (Bold)" }}
                  >
                    WE ARE JUST ONE CLICK AWAY.
                  </span>
                </Col>
                <Col className="position-absolute w-25 h-100 justify-content-center d-flex top-50 start-100 translate-middle pt-1">
                  <Col
                    className="position-absolute rounded-circle w-100 h-75 justify-content-center d-flex start-0 "
                    style={{ background: "#e2bb2c" }}
                  >
                    <IoMdMail
                      size={"calc(0.5*100vw"}
                      fill={"black"}
                      href="mailto:lyamii.com"
                      className="w-50 h-100 d-grid"
                    />
                  </Col>
                </Col>
              </div>
              <span
                className="fs-20 d-flex bold justify-content-end"
                style={{ color: "#0752a1", fontFamily: "Georgia (bold)" }}
              >
                Connect.CRM@Lyamii.com
              </span>
              <span
                className="fs-20 d-flex bold justify-content-end"
                style={{ color: "#0752a1", fontFamily: "Georgia (bold)" }}
              >
                Connect.Business@Lyamii.com
              </span>
              <span
                className="fs-20 d-flex bold justify-content-end"
                style={{ color: "#0752a1", fontFamily: "Georgia (bold)" }}
              >
                Drop.Feedback@Lyamii.com
              </span>
            </Col>
            <Col
              className="col-5 position-relative p-0 m-0"
              style={{
                color: "#218a43",
                textShadow: "#218a43",
              }}
            >
              <div className="w-100 position-relative">
                <Col className="position-absolute w-25 h-100 justify-content-center d-flex top-50 start-0 translate-middle pt-4">
                  <Col
                    className="position-absolute green rounded-circle w-100 h-75 justify-content-center d-flex start-0 "
                    style={{ background: "#3bb348" }}
                  >
                    <BiSolidPhoneCall
                      href="tel:+1800229933"
                      size={"calc(0.5*100vw"}
                      fill={"white"}
                      className="w-50 h-100 d-grid"
                    />
                  </Col>
                </Col>
                <Col
                  className="p-4 col-11 p-0 bold display-6 round-edges text-start w-100"
                  style={{
                    background: "#889dfe",
                    color: "white",
                    textShadow: "#218a43",
                    fontFamily: "bantayog",
                  }}
                >
                  <span
                    style={{ fontFamily: "Archivo Black" }}
                    className="fs-24 d-flex justify-content-center text-center text-shadow-dark bold text-white"
                  >
                    Require Briefing!
                  </span>
                  <span
                    className="fs-16 d-flex justify-content-center"
                    style={{ color: "#0752a1", fontFamily: "Futura (Bold)" }}
                  >
                    VERIFIED USERS ONLY*
                  </span>
                </Col>
              </div>
              <span
                className="fs-20 d-flex bold align-items-center justify-content-end"
                style={{ color: "#0752a1", fontFamily: "BANGERS" }}
              >
                Schedule a callback
                <CgFileDocument
                  size={"calc(0.05*100vw"}
                  fill={"black"}
                  href="mailto:lyamii.com"
                  className="w-10 h-25 d-grid"
                />
              </span>
            </Col>
          </Row>
        </Card.Body>
      </Col>
    </Col>
  );
};

export default Contact;
