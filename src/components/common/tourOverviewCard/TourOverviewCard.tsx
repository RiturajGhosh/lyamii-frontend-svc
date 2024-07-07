import React, { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";
import style from "./TourOverviewCard.module.scss";
import { FaPlane } from "react-icons/fa6";
import { useHistory } from "react-router-dom";
import {
  SET_TOUR_PACKAGE_ID,
  selectedTourDataDto,
} from "../../../state/actions/types/tourDataActionType";
import { useDispatch } from "react-redux";
import TourCard from "../tourCard/TourCard";

export type TourOverviewCardType = {
  title?: string;
  tours: selectedTourDataDto[];
  children?: React.ReactNode;
  titleStyling?: string;
};
const TourOverviewCard: FC<TourOverviewCardType> = ({
  tours,
  title,
  titleStyling,
  children,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <section>
      {title && (
        <Col
          className={`${titleStyling} position-relative p-0 ${style.imageSection}`}
          id="home"
        >
          <Col className={`py-5 content p-0 d-grid justify-content-center`}>
            <Row className="p-0">
              <Col className="text-dark align-self-center">
                <h1 className="text-center text-orange text-shadow-light">
                  {title}
                </h1>
              </Col>
            </Row>
          </Col>
        </Col>
      )}
      <Col
        className="home-about-section sectionContainer d-flex justify-content-center py-42"
        id="about"
      >
        <Col lg={11} md={11} sx={11} xs={11}>
          {children}
          <Col
            md={12}
            lg={12}
            className="justify-content-between p-0 d-flex overflow-auto"
          >
            {tours?.map((tour, index) => (
              <TourCard tourData={tour} key={index} />
            ))}
          </Col>
        </Col>
      </Col>
    </section>
  );
};

export default TourOverviewCard;
