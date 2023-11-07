import React, { FC, useState } from "react";
import { Image, Col, Row, Ratio, Card, Button } from "react-bootstrap";
import style from "./TourCard.module.scss";
import { IoIosHeart, IoMdHeartEmpty } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { BsHouseCheck } from "react-icons/bs";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useSelector } from "react-redux";
import PrivateBathroom from "../icon/privateBathroom";
import { LuParkingCircle } from "react-icons/lu";
import { useHistory } from "react-router-dom";

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
  titleStyling,
}) => {
  const screenSize = useSelector(selectScreenSize);
  const [IsWishlisted, setToWishList] = useState(false);
  const history = useHistory();
  return (
    <>
      <Row
        className={`${className} ${style.card} p-0`}
        style={{ minHeight: "100%" }}
      >
        <Col md={5} lg={5} sm={5} className="p-0 col-5 m-0">
          <Col>
            <Col className="text-white position-relative p-0 m-0 pb-2">
              {propertyData.photos.relativeUrl && (
                <Ratio aspectRatio={imageRatio}>
                  <>
                    <Image
                      className={`p-0 rounded-3 position-absolute ${imageStyling}`}
                      src={propertyData.photos.relativeUrl}
                    />
                    <Card.Body className="py-0">
                      {IsWishlisted ? (
                        <Card.Text
                          className="bold p-2 text-white position-absolute text-shadow-dark fw-bold top-0 end-0"
                          onClick={() => setToWishList(false)}
                        >
                          <IoMdHeartEmpty />
                        </Card.Text>
                      ) : (
                        <Card.Text
                          className="bold p-2 text-white position-absolute text-shadow-dark fw-bold top-0 end-0"
                          onClick={() => setToWishList(true)}
                        >
                          <IoIosHeart />
                        </Card.Text>
                      )}
                    </Card.Body>
                  </>
                </Ratio>
              )}
            </Col>
          </Col>
          <Row className={`m-1 py-8 p-0 d-block`}>
            <Row
              md={12}
              lg={12}
              sm={12}
              className="position-relative justify-content-between p-0 text-wrap border-1 w-100 border  bg-transparent border-secondary text-white"
            >
              <BsHouseCheck
                fill={"grey"}
                className="w-15 h-15 p-0 justify-content-start d-flex"
              />
              <LuParkingCircle
                fill={"grey"}
                className="w-15 h-15 p-0 justify-content-start d-flex"
              />

              <Col className="w-15 text-white p-0">
                <PrivateBathroom height="20px" width="24px" />
              </Col>
            </Row>
            <Row
              md={12}
              lg={12}
              sm={12}
              className="position-relative justify-content-between p-0 mt-1 text-wrap border-1 w-100 border  bg-transparent border-secondary text-white"
            >
              <BsHouseCheck
                fill={"grey"}
                className="w-15 h-15 p-0 justify-content-start d-flex"
              />
              <LuParkingCircle
                fill={"grey"}
                className="w-15 h-15 p-0 justify-content-start d-flex"
              />

              <Col className="w-15 text-white p-0">
                <PrivateBathroom height="20px" width="24px" />
              </Col>
            </Row>
          </Row>
        </Col>

        <Col
          md={7}
          lg={7}
          sm={7}
          xs={7}
          sx={12}
          className={`col-7 py-8 p-0 m-0`}
        >
          <Row className="p-0 m-0">
            <Col md={12} sm={12} lg={12} className="col-12 p-0 m-0">
              <Col className="position-relative p-0">
                <Card.Body className="p-0 px-2 m-0">
                  <Card.Title className="small text-wrap" onClick={()=>history.push('')}>
                    {tourname.text && tourname.text}
                  </Card.Title>
                  <Card.Text className="small min-vh-25">
                    {"overview"}
                  </Card.Text>
                </Card.Body>
              </Col>
              <Col className="position-relative p-0 border-1 text-center justify-content-end text-white">
                <Button
                  className="align-middle justify-self-center w-100 mb-1 btn-secondary"
                  style={{ background: "Brown" }}
                  onClick={() => {}}
                >
                  {"STAYS"}
                </Button>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="position-relative p-0 m-0">
        <Col className="col-3 align-self-center">
          <Col
            className={`${titleStyling} fw-bold align-items-center text-nowrap text-secondary`}
          >
            <span className="text-align-center justify-content-center small d-flex">
              {"Review"}
            </span>
            <Row className="w-100 justify-content-center">
              {[...Array(propertyData.starRating.value)].map(
                (index: number) => {
                  return (
                    <AiFillStar
                      key={index}
                      size={15}
                      style={{
                        color: "#fed02b",
                        width: "fit-content",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        marginTop: "0px",
                      }}
                      className="d-flex"
                    />
                  );
                }
              )}
            </Row>
          </Col>
        </Col>
        <Col className="col-4 px-1 align-self-center">
          <Col
            className={`${titleStyling} fw-bold justify-content-center d-flex align-self-center text-nowrap text-secondary`}
          >
            <button
              className={`d-flex align-self-center justify-items-center text-white ${style.btmRght} px-4`}
              style={{ background: "rgb(0 91 90)" }}
              onClick={() => {}}
            >
              {"FAQ"}
            </button>
          </Col>
        </Col>
        <Col className="col-5 p-0">
          <Col className="justify-content-end d-flex flex-column p-0">
            <Button
              className="align-middle justify-self-center w-100 btn-secondary mb-1"
              onClick={() => {}}
            >
              {"BOOK NOW"}
            </Button>
            <Button
              className="align-middle justify-self-center w-100 btn-secondary"
              onClick={() => {}}
            >
              {"BUY NOW"}
            </Button>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default TourCard;
