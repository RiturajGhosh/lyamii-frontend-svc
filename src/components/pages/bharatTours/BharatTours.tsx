import React, { FC } from "react";
import { bharatTours } from "../../common/enum/enum";
import style from "./BharatTours.module.scss";
import { Col, Row } from "react-bootstrap";
import TourOverviewCard from "../../common/tourOverviewCard/TourOverviewCard";

const BharatTours: FC = () => {
  const description =
    "Royal India Edition is a luxurious experience of diverse cultures, each adding its unique hues to the nation's identity. From the resplendent palaces that dot the landscape to the tales of mighty kings and queens who shaped the nation's destiny, the legacy of royal India resonates through its architecture, traditions, and captivating stories. Includes all 5 star luxury stays, cultural cuisines, domestic flights, day to day individual assistance and transfers.";

  return (
    <TourOverviewCard
      tours={bharatTours}
      title="Royal India Edition"
      titleStyling={style.tourSection}
    >
      <Col className={`py-5 p-0 d-grid justify-content-center`}>
        <Row className="p-0">
          <Col className="text-dark align-self-center">
            <span className="text-start fs-16 text-wrap">{description} </span>
            <ul className="p-3 fs-16">
              <li>Luxury Tours.</li>
              <li>Ranges from 12,000usd to 22,000usd.</li>
              <li>
                Luxury Stays, Business class / Domestic air tickets, individual
                tour guide, SUV local transports, Cuisines, Activities, Cultural
                Shows.
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    </TourOverviewCard>
  );
};

export default BharatTours;
