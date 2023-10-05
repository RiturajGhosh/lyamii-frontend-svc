import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./MapAndEscape.module.scss";
import BorderCard from "../../common/borderCard/BorderCard";
import Globe from "../../common/globe/Globe";
import { mapDescription } from "../../common/enum/enum";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useSelector } from "react-redux";

const MapAndEscape: FC = () => {

  const screenSize = useSelector(selectScreenSize);
  return (
    <Container className="home-about-section sectionContainer py-42" fluid id="about">
      <Container>
        <Row className="g-4">
          <Col md={7} className="">
            <BorderCard
              title="Play with MAP"
              text={mapDescription}
              minHeight={screenSize.isDesktop ? "630px" : "0px"}
              buttonColor="bg-warning"
              descriptionStyling="text-blue"
              className={`border-5 pt-32 shadow-lg justify-content-start ${style.bgBluePink}`}
            >
              <div style={{ width: "25%", height: "25%" }}>
                <Globe/>
              </div>
            </BorderCard>
          </Col>
          <Col md={5} className="">
            <BorderCard
              title="The Escape Plan"
              text={mapDescription}
              minHeight={screenSize.isDesktop ? "630px" : "0px"}
              buttonColor="bg-light"
              descriptionStyling="text-blue"
              className="border-5 shadow-lg bg-dark mh-2 text-white"
              imageAbove={
                "https://cdn.pixabay.com/photo/2016/08/05/15/06/tunnel-1572456_1280.jpg"
              }
            ></BorderCard>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MapAndEscape;
