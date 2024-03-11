import React, { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";

const ContactDetail: FC = () => {
  return (
    <Col
      className="home-about-section d-flex min-vh-100 justify-content-center sectionContainer pt-42"
      id="about"
    >
      <Col lg={11} md={11} sx={11} xs={11} className="align-items-center d-flex">
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
                <span
                  className="fs-24 d-flex justify-content-start text-start text-shadow-dark bold text-white"
                  style={{ fontFamily: "Archivo Black" }}
                >
                  Email Ids for Any Quarries !
                </span>
              </div>
              <span
                className="fs-20 d-flex bold justify-content-start"
                style={{ color: "#0752a1", fontFamily: "Georgia (bold)" }}
              >
                Connect.CRM@Lyamii.com
              </span>
              <span
                className="fs-20 d-flex bold justify-content-start"
                style={{ color: "#0752a1", fontFamily: "Georgia (bold)" }}
              >
                Connect.Business@Lyamii.com
              </span>
              <span
                className="fs-20 d-flex bold justify-content-start"
                style={{ color: "#0752a1", fontFamily: "Georgia (bold)" }}
              >
                Drop.Feedback@Lyamii.com
              </span>
            </Col>
          </Row>
        </Card.Body>
      </Col>
    </Col>
  );
};

export default ContactDetail;
