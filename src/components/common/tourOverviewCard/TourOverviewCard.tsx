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
            <Row className="w-100 justify-content-center scrolling-wrapper-flexbox">
              {tours?.length > 0 &&
                tours?.map((option: selectedTourDataDto, index: number) => (
                  <Col
                    key={index}
                    md={6}
                    lg={6}
                    className={`d-flex ${style.reasonCard} p-0 m-0`}
                  >
                    <Card className={`my-2 box box-1 d-flex mx-1`}>
                      <Card.Body
                        className="first p-0"
                        style={{ zIndex: "1 !important" }}
                      >
                        <Card.Img
                          className={`w-100 p-0 m-0 justify-content-center ${style.reasonCard}`}
                          style={{
                            // width: "100%",
                            padding: "0px !important",
                            margin: "0px !important",
                          }}
                          src={`https://drive.google.com/thumbnail?id=${option.imageUri[0]}`}
                          alt="image"
                          onClick={() => {
                            const setPackageId = async () => {
                              await dispatch({
                                type: SET_TOUR_PACKAGE_ID,
                                payload: option?.packageId,
                              });
                            };
                            setPackageId().then(() => {
                              history.push("/tour-detail");
                            });
                          }}
                        />
                        <Card.Body className="py-0">
                          <Card.Text className="bold h1 p-2 text-white position-absolute text-shadow-dark fw-bold top-0 start-0">
                            {option?.noOfDays}
                            {"D"}
                          </Card.Text>

                          {option.tripType ? (
                            <Card.Text className="bold w-100 justify-content-center p p-2 text-white d-flex flex-nowrap text-shadow-dark position-absolute fw-bold top-50 translate-middle start-50">
                              {option?.tripType}
                            </Card.Text>
                          ) : (
                            <Card.Text className="bold p p-2 text-white d-flex flex-nowrap text-shadow-dark position-absolute fw-bold top-50 translate-middle start-50">
                              {option?.packageName}
                              <FaPlane className="mx-2 my-1 box-shadow-lg" />
                              {/* {option.to} */}
                            </Card.Text>
                          )}
                        </Card.Body>
                      </Card.Body>
                      <section
                        className="overflow-auto second"
                        style={{ zIndex: "1 !important" }}
                      >
                        {option?.destinations?.map(
                          (place: string, idx: number) => (
                            <div
                              className="timeline"
                              key={idx}
                              onClick={() => history.push("/tour-detail")}
                            >
                              {idx % 2 === 0 && (
                                <>
                                  <div className="timeline-empty"></div>

                                  <div className="timeline-middle">
                                    <div className="timeline-circle"></div>
                                  </div>
                                </>
                              )}
                              <div
                                className={`timeline-component small align-self-center timeline-content ${
                                  idx % 2 === 0 ? "text-start" : "text-end"
                                }`}
                              >
                                {place}
                              </div>
                              {idx % 2 !== 0 && (
                                <>
                                  <div className="timeline-middle">
                                    <div className="timeline-circle"></div>
                                  </div>
                                  <div className="timeline-empty"></div>
                                </>
                              )}
                            </div>
                          )
                        )}
                      </section>
                      <Card.Text
                        style={{ zIndex: "100 !important" }}
                        className="bold p p-2 z-index-3 text-white position-absolute text-shadow-dark fw-bold top-0 end-0"
                      >
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          {option?.packagePrice?.map(
                            (price: string, index: number) => (
                              <option key={index} value={price}>
                                {price}
                              </option>
                            )
                          )}
                        </select>
                      </Card.Text>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Col>
        </Col>
      </Col>
    </section>
  );
};

export default TourOverviewCard;
