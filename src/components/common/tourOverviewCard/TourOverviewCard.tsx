import React, { FC } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import style from "./TourOverviewCard.module.scss";
import { FaPlane } from "react-icons/fa6";
import { useHistory } from "react-router-dom";

export type TourOverviewCardType = {
  title?: string;
  tours: any[];
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
  return (
    <section>
      {title && (
        <Container
          fluid
          className={`${titleStyling} position-relative p-0 ${style.imageSection}`}
          id="home"
        >
          <Container
            className={`py-5 content p-0 d-grid justify-content-center`}
          >
            <Row className="p-0">
              <Col className="text-dark align-self-center">
                <h1 className="text-center text-orange text-shadow-light">
                  {title}
                </h1>
              </Col>
            </Row>
          </Container>
        </Container>
      )}
      <Container className="py-42">
        {children}
        <Container>
          <Col
            md={12}
            lg={12}
            className="justify-content-between p-0 d-flex overflow-auto"
          >
            <Row className="w-100 justify-content-center scrolling-wrapper-flexbox">
              {tours.map((option, idx) => (
                <Col
                  key={idx}
                  md={6}
                  lg={6}
                  className={`d-flex ${style.reasonCard} p-0 m-0`}
                >
                  <Card className={`my-2 box box-1 d-flex mx-1`}>
                    <Card.Body className="first p-0">
                      <Card.Img
                        className={`p-0 m-0 justify-content-center ${style.reasonCard}`}
                        style={{
                          // width: "100%",
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        src={option.img}
                      />
                      <Card.Body className="py-0">
                        <Card.Text className="bold h1 p-2 text-white position-absolute text-shadow-dark fw-bold top-0 start-0">
                          {option.days}
                          {"D"}
                        </Card.Text>
                        <Card.Text className="bold p p-2 text-white position-absolute text-shadow-dark fw-bold top-0 end-0">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>{option.priceInUSD}</option>
                            <option value="1">{option.priceInUSD}</option>
                            <option value="2">{option.priceInEUR}</option>
                            <option value="3">{option.priceInAED}</option>
                          </select>
                        </Card.Text>
                        {option.tourType ? (
                          <Card.Text className="bold w-100 justify-content-center p p-2 text-white d-flex flex-nowrap text-shadow-dark position-absolute fw-bold top-50 translate-middle start-50">
                            {option.tourType}
                          </Card.Text>
                        ) : (
                          <Card.Text className="bold p p-2 text-white d-flex flex-nowrap text-shadow-dark position-absolute fw-bold top-50 translate-middle start-50">
                            {option.from}
                            <FaPlane className="mx-2 my-1 box-shadow-lg" />
                            {option.to}
                          </Card.Text>
                        )}
                      </Card.Body>
                    </Card.Body>
                    <section className="overflow-auto second">
                      {option.places.map((place: string, idx: number) => (
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
                            className={
                              "timeline-component justify-content-center small timeline-content"
                            }
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
                      ))}
                    </section>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Container>
      </Container>
    </section>
  );
};

export default TourOverviewCard;
