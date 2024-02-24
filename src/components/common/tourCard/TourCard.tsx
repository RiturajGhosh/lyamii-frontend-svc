import React, { FC, useState } from "react";
import { Image, Col, Row, Ratio, Button } from "react-bootstrap";
import style from "./TourCard.module.scss";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useDispatch, useSelector } from "react-redux";
import { LuChevronRightCircle } from "react-icons/lu";
import { useHistory } from "react-router-dom";
import {
  SET_SELECTED_TOUR_DATA,
  selectedTourDataDto,
} from "../../../state/actions/types/tourDataActionType";
import { GoDotFill } from "react-icons/go";

type TourCardType = {
  key?: number;
  imageRatio?: number;
  tourData: selectedTourDataDto;
  imageStyling?: string;
  titleStyling?: string;
  className?: string;
  minHeight?: string;
  coordinates?: number[];
  tour?: selectedTourDataDto;
};
const TourCard: FC<TourCardType> = ({
  key,
  imageRatio,
  className,
  tourData,
  minHeight,
  coordinates,
  imageStyling,
  tour,
  titleStyling,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Row
      className={`${className} ${style.card} p-0`}
      style={{ minHeight: "100%", background: "#c4cdfe" }}
    >
      <Col md={6} lg={6} sm={6} className="p-0 col-6 m-0">
        <Col>
          <Col className="text-white position-relative p-2 m-0 pb-2">
            {tourData?.basicTourData?.photos?.main?.relativeUrl && (
              <Ratio aspectRatio={imageRatio}>
                <>
                  <Image
                    className={`p-0 rounded-3 position-absolute ${imageStyling}`}
                    src={tourData?.basicTourData?.photos?.main?.relativeUrl}
                    onClick={() => {
                      dispatch({
                        type: SET_SELECTED_TOUR_DATA,
                        payload: tourData,
                      });
                      history.push("/tour-detail");
                    }}
                  />
                  <Col className="position-relative p-0 border-1 pb-2 mb-5 text-center justify-content-end text-white">
                    <Button
                      className="align-middle justify-self-center position-absolute top-100 start-50 translate-middle-y mb-1 btn-secondary"
                      style={{
                        background: "#0752a1"
                      }}
                      onClick={() => {}}
                    >
                      {tourData?.tourPrice}
                      {"$"}
                    </Button>
                  </Col>
                </>
              </Ratio>
            )}
          </Col>
        </Col>
        <div className="fw-bold align-items-center text-white flex-nowrap py-3 mx-4 justify-content-center flex-row d-flex m-0 p-0 position-relative">
          <span className="p-0 m-0 display-5 d-flex flex-wrap w-90 text-center fit-content">
            {/* {facilities.map((facility: any) => {
              return (
                <img
                  className={`p-0 m-0 justify-content-center`}
                  style={{
                    width: "25px",
                    padding: "0px !important",
                    margin: "0px !important",
                  }}
                  src={facility}
                />
              );
            })} */}
          </span>
        </div>
      </Col>
      <Col
        md={6}
        lg={6}
        sm={6}
        xs={6}
        sx={12}
        className={`col-6 p-0 m-0 align-self-end`}
      >
        <Row className="p-0 m-0 h-90">
          <Col className="position-relative m-0 d-flex p-0">
            <Col className="p-0 gap-3 d-flex flex-column m-0">
              <Col
                className="text-white flex-column d-flex h-100 position-relative m-0"
                style={{ background: "#889dfe" }}
              >
                <Col
                  className={`overflow-hidden hidden-scroll ${style.routeTimeline}`}
                >
                  {tourData?.timeline.map((place: any, idx: number) => (
                    <Col className="py-2 d-inline fit-content">
                      <Row className="d-flex gx-0">
                        <Col>
                          <div
                            className="pl-2 float-right h6 p-0 m-0"
                            style={{
                              color: "#f7de26 ",
                            }}
                          >
                            {place?.destination}
                          </div>
                        </Col>
                        <Col className="col-2">
                          <GoDotFill fill="#f7de26" />
                        </Col>
                      </Row>
                    </Col>
                  ))}
                </Col>
                <Row>
                  <Col lg={8} xs={8} className="col-8 py-2 align-self-end">
                    <Col lg={12} xs={12} className=" py-2 align-self-end">
                      <Col
                        className={`fw-bold d-flex flex-column align-items-center text-nowrap text-secondary`}
                      >
                        <Col
                          className="display-6 justify-content-center"
                          style={{
                            color: "white",
                          }}
                        >
                          {tourData?.tourDays}D
                        </Col>
                        <Row className="w-100 justify-content-center">
                          {[
                            ...Array(tourData?.basicTourData.starRating?.value),
                          ]?.map((index: number) => {
                            return (
                              <AiFillStar
                                key={index}
                                size={15}
                                style={{
                                  color: "#f7de26",
                                  width: "fit-content",
                                  paddingLeft: "0px",
                                  paddingRight: "0px",
                                  marginTop: "0px",
                                }}
                                className="d-flex"
                              />
                            );
                          })}
                          {[
                            ...Array(
                              5 - tourData?.basicTourData.starRating?.value
                            ),
                          ]?.map((index: number) => {
                            return (
                              <AiOutlineStar
                                key={index}
                                size={15}
                                style={{
                                  color: "f7de26",
                                  width: "fit-content",
                                  paddingLeft: "0px",
                                  paddingRight: "0px",
                                  marginTop: "0px",
                                }}
                                className="d-flex"
                              />
                            );
                          })}
                        </Row>
                      </Col>
                    </Col>
                  </Col>
                  <Col className="col-4 justify-content-center p-0 align-self-center">
                    <LuChevronRightCircle
                      fill="#fed02b"
                      size={"40px"}
                      onClick={() => {
                        dispatch({
                          type: SET_SELECTED_TOUR_DATA,
                          payload: tourData,
                        });
                        history.push("/tour-detail");
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TourCard;
