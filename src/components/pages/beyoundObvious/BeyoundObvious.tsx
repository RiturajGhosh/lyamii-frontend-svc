import React, { FC, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import style from "./BeyoundObvious.module.scss";
import { FaPlane } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useHistory } from "react-router-dom";
import CommentIcon from "../../common/icon/commentIcon";
import {
  SET_NON_INDIAN_TOURS,
  selectedTourDataDto,
} from "../../../state/actions/types/tourDataActionType";
import { selectNonIndianTours } from "../../../state/selectors/selectTourData";
import { getNonIndianToursApi } from "../../../api/nonIndianTours/getNonIndianToursApi";
import { parseTourDataArray } from "../../../utils/parseTourData";

const BeyoundObvious: FC = () => {
  const screenSize = useSelector(selectScreenSize);
  const history = useHistory();
  function handleScroll(e: any) {
    const element = e.target;
    if (element.scrollLeft + element.clientWidth >= element.scrollWidth) {
      fetchTours();
    }
  }
  const tours: any = useSelector(selectNonIndianTours);
  const [tourList, setTourList] = useState<selectedTourDataDto[]>(tours);
  const dispatch = useDispatch();
  const fetchTours = async () => {
    const response = await getNonIndianToursApi();
    if (response.status === 200) {
      dispatch({
        type: SET_NON_INDIAN_TOURS,
        payload: parseTourDataArray(response.data),
      });
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  useEffect(() => {
    tours?.length > 0 && setTourList(tours);
  }, [tours]);
  return (
    <Col
      className="home-about-section sectionContainer d-flex justify-content-center py-42 px-0"
      id="about"
    >
      <Col lg={11} md={11} sx={11} xs={11}>
        <Row>
          <Col
            md={10}
            lg={8}
            className="card-body pos-lg-abs pos-md-abs pos-sm-rel pos-xs-rel top-0 end-0 m-auto"
            style={{ background: "#c4cdfe" }}
          >
            <span
              className="display-3 text-outline text-shadow-light"
              style={{ color: "#0c519f", fontFamily: "Blueberry" }}
            >
              BEYOUND
            </span>
            <span
              className="display-3 d-inline-flex text-outline text-shadow-light"
              style={{
                color: "black",
                fontFamily: "Blueberry",
                textTransform: "lowercase",
              }}
            >
              Obvious{" "}
              <img
                className={`inline-flex w-20 h-10`}
                style={{
                  padding: "0px !important",
                  margin: "0px !important",
                }}
                alt={""}
                src={require("../../../Assets/obvious.png")}
              />
            </span>
          </Col>
          {screenSize.isDesktop && (
            <>
              <Col
                className="card-body d-flex align-items-center justify-content-center w-10 float-center position-absolute mt-5 top-0 start-90 m-0 p-0"
                style={{ background: "#c4cdfe" }}
              >
                <span
                  className="display-5 d-inline-flex fit-content justify-content-center mt-5 text-outline fw-bold"
                  style={{ color: "#4b7b57" }}
                >
                  <img
                    className={`fit-content h-10 justify-content-end`}
                    style={{
                      padding: "0px !important",
                      margin: "0px !important",
                    }}
                    alt={""}
                    src={require("../../../Assets/compass.png")}
                  />
                </span>
              </Col>
              <Col
                md={12}
                lg={12}
                className="border-5 border border-dark p-5 my-2 flex-column justify-content-between p-0 d-flex overflow-auto"
              >
                <Row className="col-12 w-100 justify-content-center scrolling-wrapper-flexbox">
                  {tourList.slice(0, 4).map((list, idx) => (
                    <Col key={idx} md={6} lg={6} className="py-2">
                      <Card className={`my-2 mx-1`}>
                        <Card.Body className="p-0">
                          <Card.Img
                            className={`p-0 m-0 pointer justify-content-center ${style.reasonCard}`}
                            onClick={() =>
                              history.push(`/tour-detail:${list.packageId}`)
                            }
                            style={{
                              // width: "100%",
                              padding: "0px !important",
                              margin: "0px !important",
                            }}
                            src={require("../../../Assets/header.jpg")}
                          />
                          <Card.Body className="py-0">
                            <Card.Text className="bold col-3 p p-2 text-white position-absolute text-shadow-dark fw-bold bottom-0 end-0">
                              {/* <span className="col-12 h-100 border border-1 bg-success"> */}
                              <span className="p-0 fs-24 m-0 text-center fit-content">
                                <select
                                  className="form-select pointer"
                                  aria-label="Default select example"
                                >
                                  {list?.packagePrice?.map(
                                    (price: string, index: number) => (
                                      <option key={index} value={price}>
                                        {price}
                                        {list?.packagePrice.length === 1 &&
                                          " INR"}
                                      </option>
                                    )
                                  )}
                                </select>
                              </span>
                              {/* </span> */}
                            </Card.Text>
                            <Card.Text className="bold p text-white position-absolute justify-content-center zi-0 text-shadow-dark fw-bold bottom-0 start-0">
                              <CommentIcon
                                className="rotate-20 flip-x"
                                height="90px"
                                width="90px"
                                fill="#5394ec"
                              />
                              <span className="bold p text-white justify-content-center  position-absolute zi-2 h-100 text-center align-items-center d-flex w-100 text-shadow-dark fw-bold bottom-0 start-0">
                                {list.noOfDays}D
                              </span>
                            </Card.Text>
                            <Card.Text className="bold p p-2 text-white d-flex flex-nowrap position-absolute fw-bold top-50 translate-middle start-50">
                              India
                              <span>
                                <FaPlane className="mx-2 my-1" />
                              </span>
                              {list.country}
                            </Card.Text>
                          </Card.Body>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Col
                  onClick={() => history.push("/explore")}
                  className="col-12 pointer justify-content-end d-flex px-3 text-shadow-dark"
                  style={{ color: "#0c519f" }}
                >
                  See more
                </Col>
              </Col>
            </>
          )}
          {screenSize.isMobile && (
            <Col
              md={12}
              lg={12}
              className="m-0 justify-content-between p-0 d-flex overflow-auto"
            >
              <Row className="w-100 justify-content-center">
                <div className="product-list" onScroll={(e) => handleScroll(e)}>
                  {tourList.map((list, idx) => (
                    <Col key={idx} sm={12} xs={12}>
                      <Card className={`my-2 mx-1`}>
                        <Card.Body className="p-0">
                          <Card.Img
                            className={`p-0 m-0 pointer justify-content-center ${style.reasonCard}`}
                            style={{
                              // width: "100%",
                              padding: "0px !important",
                              margin: "0px !important",
                            }}
                            onClick={() =>
                              history.push(`/tour-detail:${list.packageId}`)
                            }
                            src={require("../../../Assets/header.jpg")}
                          />
                          <Card.Body className="py-0">
                            <Card.Text className="bold p p-2 text-white position-absolute fw-bold top-0 start-0">
                              {list.noOfDays}D
                            </Card.Text>
                            <Card.Text className="bold p p-2 text-white position-absolute fw-bold top-0 end-0">
                              <span className="p-0 fs-24 m-0 text-center fit-content">
                                <select
                                  className="form-select pointer"
                                  aria-label="Default select example"
                                >
                                  {list?.packagePrice?.map(
                                    (price: string, index: number) => (
                                      <option key={index} value={price}>
                                        {price}
                                        {list?.packagePrice.length === 1 &&
                                          " INR"}
                                      </option>
                                    )
                                  )}
                                </select>
                              </span>
                            </Card.Text>
                            <Card.Text className="bold p p-2 text-white d-flex flex-nowrap position-absolute fw-bold top-50 translate-middle start-50">
                              India
                              <span>
                                <FaPlane className="mx-2 my-1" />
                              </span>
                              {list.country}
                            </Card.Text>
                          </Card.Body>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </div>
              </Row>
            </Col>
          )}
        </Row>
      </Col>
    </Col>
  );
};

export default BeyoundObvious;
