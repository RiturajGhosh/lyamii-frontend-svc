import React, { FC, useState } from "react";
import { Image, Col, Row, Ratio, Button } from "react-bootstrap";
import style from "./TourCard.module.scss";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useDispatch, useSelector } from "react-redux";
import { LuChevronRightCircle } from "react-icons/lu";
import { useHistory } from "react-router-dom";
import { SET_SELECTED_TOUR_DATA } from "../../../state/actions/types/tourDataActionType";
import { backpackersTours, facilities } from "../enum/enum";
import { GoDotFill } from "react-icons/go";

type TourCardType = {
  key?: number;
  tourname?: any;
  mealPaln?: any;
  recommendedDate?: any;
  location?: any;
  acceptsWalletCredit?: any;
  unitConfigurations?: any;
  imageRatio?: number;
  price?: any;
  propertyData?: any;
  imageStyling?: string;
  titleStyling?: string;
  className?: string;
  minHeight?: string;
  coordinates?: number[];
  tour?: any;
};
const TourCard: FC<TourCardType> = ({
  tourname,
  key,
  mealPaln,
  recommendedDate,
  location,
  imageRatio,
  acceptsWalletCredit,
  unitConfigurations,
  minHeight,
  price,
  className,
  coordinates,
  propertyData,
  imageStyling,
  tour,
  titleStyling,
}) => {
  const screenSize = useSelector(selectScreenSize);
  const [IsWishlisted, setToWishList] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Row
      className={`${className} ${style.card} p-0`}
      style={{ minHeight: "100%", background: "#cdface" }}
    >
      <Col md={6} lg={6} sm={6} className="p-0 col-6 m-0">
        <Col>
          <Col className="text-white position-relative p-2 m-0 pb-2">
            {propertyData?.photos?.relativeUrl && (
              <Ratio aspectRatio={imageRatio}>
                <>
                  <Image
                    className={`p-0 rounded-3 position-absolute ${imageStyling}`}
                    src={propertyData?.photos?.relativeUrl}
                    onClick={() => {
                      dispatch({
                        type: SET_SELECTED_TOUR_DATA,
                        payload: tour,
                      });
                      history.push("/tour-detail");
                    }}
                  />
                  <Col className="position-relative p-0 border-1 text-center justify-content-end text-white">
                    <Button
                      className="align-middle justify-self-center position-absolute top-100 start-50 translate-middle-y mb-1 btn-secondary"
                      style={{ background: "#0a99d7" }}
                      onClick={() => {}}
                    >
                      {"42000"}
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
            {facilities.map((facility: any) => {
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
            })}
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
                style={{
                  background: "#9e9e9e ",
                }}
              >
                <Col
                  className={`overflow-hidden hidden-scroll ${style.routeTimeline}`}
                >
                  {backpackersTours[0]?.places?.map(
                    (place: string, idx: number) => (
                      <Col className="py-2 d-inline fit-content">
                        <Row className="d-flex gx-0">
                          <Col>
                            <div
                              className="pl-2 float-right h6 p-0 m-0"
                              style={{
                                color: "#f7de26 ",
                              }}
                            >
                              {place}
                            </div>
                          </Col>
                          <Col className="col-2">
                            <GoDotFill fill="#f7de26" />
                          </Col>
                        </Row>
                      </Col>
                    )
                  )}
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
                            color: "#f7de26",
                          }}
                        >
                          5D
                        </Col>
                        <Row className="w-100 justify-content-center">
                          {[...Array(3)]?.map((index: number) => {
                            return (
                              <AiFillStar
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
                          {[...Array(2)]?.map((index: number) => {
                            return (
                              <AiOutlineStar
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
                          payload: tour,
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
