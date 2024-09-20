import React, { FC, useEffect } from "react";
import AboutUs from "../aboutUS/AboutUs";
import Mission from "../mission/Mission";
import { useLocation } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import { bootcamps, team } from "../enum/aboutUs";
import Icon from "../icon/Icon";
import style from "./Community.module.scss";
import { useSelector } from "react-redux";
import {
  selectIsMobile,
  selectIsTab,
  selectScreenSize,
} from "../../../state/selectors/selectScreenSize";

const Community: FC = () => {
  const location = useLocation();
  const screenSize = useSelector(selectScreenSize);
  const isMobile = useSelector(selectIsMobile);
  const isTab = useSelector(selectIsTab);
  const scrollToComment = () => {
    let currentLocation = location.pathname;
    const hasCommentAnchor = currentLocation.includes("/");
    if (hasCommentAnchor) {
      const anchorCommentId = `#${currentLocation.split("/")[1]}`;
      const anchorComment = document.getElementById(anchorCommentId);
      if (anchorComment) {
        anchorComment.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  useEffect(() => {
    scrollToComment();
  }, []);

  return (
    <section>
      <Col className="position-relative">
        <Col
          className={`position-relative p-0 ${style.imageSection} ${style.tourSection}`}
          id="home"
        >
          <Col className={`py-5 content p-0 d-grid justify-content-center`}>
            <Row className="p-0">
              <Col className="text-dark align-self-center">
                <h1 className="text-center text-orange text-shadow-light">
                  About Us
                </h1>
              </Col>
            </Row>
          </Col>
        </Col>
      </Col>
      <AboutUs />
      <Mission />

      <Container fluid="lg" className="py-5 my-5 flex-column d-flex">
        <h2
          className=""
          style={{
            fontSize: 50,
            fontFamily: "auto",
            fontWeight: "400",
            marginBottom: 40,
            color: "black",
            textAlign: "center",
            position: "relative",
          }}
        >
          <img
            className="col-md-5 col-sm-5 col-lg-5 col-sx-6 col-9"
            src={require("../../../Assets/team.png")}
          />
        </h2>{" "}
        <Row>
          {team.map((team, index: number) => {
            return (
              <Col
                lg={3}
                md={3}
                sm={3}
                sx={3}
                key={index}
                className="col-6 p-0 m-0 d-inline-block position-relative"
              >
                <Card style={{}}>
                  <Card.Img
                    style={{
                      objectFit: "cover",
                      height: screenSize.screenSize > 630 ? "270px" : "150px",
                    }}
                    variant="top"
                    src={
                      team.img
                        ? team.img
                        : "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
                    }
                    alt={""}
                  />
                  <Card.Body className="text-center">
                    <Card.Text className="fw-bold p pb-0 mb-0">
                      {team.name}
                    </Card.Text>
                    <span className="small p-0 m-0">{team.position}</span>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container fluid="lg" className="py-5 my-5 flex-column d-flex">
        <Row>
          {bootcamps.map((bootcamp, index: number) => {
            return (
              <Col
                lg={3}
                md={3}
                sm={6}
                sx={6}
                key={index}
                className="col-6 d-inline-block position-relative"
              >
                <Row style={{}} className="flex-row align-items-center">
                  <Col lg={4} md={4} sm={3} sx={3} className="w-25 p-0 m-0">
                    <Icon
                      name="HiMapPin"
                      fill="#fd636b"
                      className={`w-100 h-100 p-0 m-0 rounded-circle`}
                      style={{
                        padding: "0px !important",
                        margin: "0px !important",
                      }}
                    />
                  </Col>
                  <Col className="w-60">
                    <Col className="text-center d-flex flex-column align-items-center">
                      <span className="fw-bold small pl-1 p-0 m-0">
                        {bootcamp.location}
                      </span>
                      <span style={{ color: "#75abdc" }}>
                        {bootcamp.organiser}
                      </span>
                    </Col>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container fluid="lg" className="py-5 my-5 flex-column d-flex">
        <h2
          className=""
          style={{
            fontSize: 50,
            fontFamily: "auto",
            fontWeight: "400",
            marginBottom: 40,
            color: "black",
            textAlign: "center",
            position: "relative",
          }}
        >
          <img
            className="col-md-8 col-sm-8 col-lg-8 col-sx-8 col-10"
            src={require("../../../Assets/certificate.png")}
          />
        </h2>{" "}
        <Row>
          <Col className="col-6 d-inline-block position-relative">
            <Col style={{}}>
              <Card.Img
                style={{ objectFit: "contain" }}
                variant="top"
                src={
                  "https://drive.google.com/thumbnail?sz=w2000&id=165EUyEHosCMebdXTLh2U20dEyGJel0Rq"
                }
                alt={""}
              />
            </Col>
          </Col>
          <Col className="col-6 d-inline-block position-relative">
            <Col style={{}}>
              <Card.Img
                style={{ objectFit: "contain" }}
                variant="top"
                src={
                  "https://drive.google.com/thumbnail?sz=w2000&id=16YunTfsgRvULDsQA3mUrcC5pKs5gX2A_"
                }
                alt={""}
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Community;
