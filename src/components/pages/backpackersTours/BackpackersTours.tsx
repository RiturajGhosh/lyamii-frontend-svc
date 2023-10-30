import React, { FC } from "react";
import { backpackersTours } from "../../common/enum/enum";
import style from "./BackpackersTours.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import TourOverviewCard from "../../common/tourOverviewCard/TourOverviewCard";

const BackpackersTours: FC = () => {
  const description="Once you step in, Backpacking across India becomes a journey inward, a reflection of the external landscape mirroring the terrain of your own thoughts and emotions. It is a spiritual quest to discover the depths of your own being. This Edition is a reminder that sometimes the path to self discovery lies not in reaching a destination, but in the act of journeying itself. Includes all top rated hostel stays, domestic flights, local tours, day to day assistance."
      
  return (
    <TourOverviewCard
      tours={backpackersTours}
      title="Backpackers Edition"
      titleStyling={style.tourSection}
    >
      <Container className={`py-5 p-0 d-grid justify-content-center`}>
        <Row className="p-0">
          <Col className="text-dark align-self-center">
            <p className="text-start small text-wrap">{description} </p>
          </Col>
        </Row>
      </Container>
    </TourOverviewCard>
  );
};

export default BackpackersTours;
