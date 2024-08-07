import React, { FC } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  SET_TOUR_PACKAGE_ID,
  selectedTourDataDto,
} from "../../../state/actions/types/tourDataActionType";
import { selectIsMobile } from "../../../state/selectors/selectScreenSize";

type TourCardType = {
  tourData: selectedTourDataDto;
  key: number;
};
const TourCard: FC<TourCardType> = ({ tourData, key }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const isMobile = useSelector(selectIsMobile);
  return (
    <section>
      <Card
        key={key}
        className="m-0 p-0"
        style={{
          border: "1px solid #E0E0E0",
          margin: "auto auto",
          borderRadius: 10,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Col
          style={{ display: "flex", padding: "20px" }}
          className="flex-md-row flex-lg-row flex-column"
        >
          <Col lg={3} md={3} className="col-12 p-0 m-0">
            <Card.Img
              className="col-12"
              variant="center"
              style={{
                // width: 322,
                // height: 319,
                borderRadius: 10,
                objectFit: "cover",
              }}
              onClick={() => {
                dispatch({
                  type: SET_TOUR_PACKAGE_ID,
                  payload: tourData.packageId,
                });
                history.push(`/tour-detail:${tourData.packageId}`);
              }}
              src={
                tourData?.imageUri?.length > 0 && tourData.imageUri[0] !== ""
                  ? `https://drive.google.com/thumbnail?sz=w2000&id=${tourData.imageUri[0]}`
                  : "https://drive.google.com/thumbnail?sz=w2000&id=1j8giF6uvrDsI-yfMYZFWxdBGe0wirl6w"
              }
            />
          </Col>
          <Col lg={9} md={9} className="col-12">
            <Card.Body
              style={{ flex: 1 }}
              className="px-0 ms-md-4 ms-lg-4 mx-0"
            >
              <Card.Title
                style={{
                  fontSize: 30,
                  fontWeight: "600",
                  color: "#4A90E2",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
                onClick={() => {
                  dispatch({
                    type: SET_TOUR_PACKAGE_ID,
                    payload: tourData.packageId,
                  });
                  history.push(`/tour-detail:${tourData.packageId}`);
                }}
              >
                {tourData?.title && tourData?.title}
              </Card.Title>
              <Row>
                <Col lg={8} md={8} className="col-12">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      marginBottom: 10,
                    }}
                  >
                    {tourData.destinations
                      .slice(0, isMobile ? 3 : 4)
                      .map((destination) => (
                        <span
                          key={destination}
                          style={{
                            padding: "5px 10px",
                            borderRadius: 0,
                            backgroundColor: "#F0F4FF",
                            color: "#4A90E2",
                            fontSize: 14,
                          }}
                        >
                          {destination}
                        </span>
                      ))}
                    {tourData?.destinations.length > (isMobile ? 3 : 4) &&
                      tourData?.destinations.length - (isMobile ? 3 : 4) + "+"}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: 10,
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    {tourData?.includes?.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        style={{
                          padding: "5px 10px",
                          borderRadius: 0,
                          backgroundColor: "#F0F4FF",
                          color: "#000000",
                          fontSize: 14,
                          fontWeight: "400",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                    {tourData?.includes.length > 3 &&
                      tourData?.includes.length - 3 + "+"}
                  </div>
                </Col>
                <Col
                  lg={4}
                  md={4}
                  className="col-12"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    // marginTop: -50,
                  }}
                >
                  <div className="w-100 d-flex flex-lg-column flex-md-column flex-row">
                    <Col lg={12} md={12} className="col-8">
                      <span
                        className="small"
                        style={{
                          // fontSize: 18,
                          fontWeight: "700",
                          color: "#818181",
                          marginBottom: 10,
                        }}
                      >
                        Tour Duration:{" "}
                        <span
                          style={{
                            fontSize: 20,
                            fontWeight: "600",
                            color: "#75abdc",
                          }}
                        >
                          {tourData?.noOfDays - 1}N/{tourData?.noOfDays}D
                        </span>
                      </span>
                      <Row
                        className="align-items-center small d-flex border border-0"
                        style={{
                          // fontSize: 18,
                          fontWeight: "700",
                          color: "#818181",
                          marginBottom: 10,
                        }}
                      >
                        Total:{" "}
                        <Col className="p-0 m-0">
                          <select
                            style={{
                              WebkitAppearance: "none",
                              MozAppearance: "none",
                              background: "transparent",
                              // fontSize: "16px",
                              fontWeight: "700",
                              color: "rgb(134, 133, 133)",
                            }}
                            className="form-select w-100 small border-0 pointer p-0"
                            aria-label="Default select example"
                          >
                            {tourData?.packagePrice?.map(
                              (price: string, index: number) => (
                                <option
                                  key={index}
                                  className={"w-100"}
                                  value={price}
                                >
                                  {price}
                                </option>
                              )
                            )}
                          </select>
                        </Col>
                      </Row>
                    </Col>
                    <Col
                      lg={12}
                      md={12}
                      className="col-4 justify-content-center align-item-center d-flex"
                    >
                      <Button
                        className="view-more-button small w-100"
                        onClick={() => {
                          dispatch({
                            type: SET_TOUR_PACKAGE_ID,
                            payload: tourData.packageId,
                          });
                          history.push(`/tour-detail:${tourData.packageId}`);
                        }}
                        style={{
                          // width: 258,
                          backgroundColor: "#4A90E2",
                          // fontSize: 25,
                          fontWeight: "600",
                          color: "#FFFFFF",
                          border: "none",
                          borderRadius: 0,
                          alignSelf: "center",
                        }}
                      >
                        View More
                      </Button>
                    </Col>
                  </div>
                </Col>
              </Row>

              <hr style={{ border: "1px dotted #E0E0E0", margin: "10px 0" }} />
              <div style={{ marginBottom: 10 }}>
                <h5
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    color: "#4A90E2",
                  }}
                >
                  Highlights
                </h5>
                <ul
                  className="small"
                  style={{
                    // fontSize: 16,
                    fontWeight: "400",
                    color: "#2E2E2E",
                    paddingLeft: 20,
                  }}
                >
                  {tourData.highlights.slice(0, 2).map((highlight) => (
                    <li>{highlight}</li>
                  ))}
                </ul>
                <a
                  style={{
                    fontSize: 16,
                    color: "#75abdc",
                    fontWeight: "600",
                    textDecorationLine: "none",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch({
                      type: SET_TOUR_PACKAGE_ID,
                      payload: tourData.packageId,
                    });
                    history.push(`/tour-detail:${tourData.packageId}`);
                  }}
                >
                  Read More
                </a>
              </div>
            </Card.Body>
          </Col>
        </Col>
      </Card>
    </section>
  );
};

export default TourCard;
