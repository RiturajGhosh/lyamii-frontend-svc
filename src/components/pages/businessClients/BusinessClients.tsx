import React, { FC } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { bussinessClintUrl } from "../../../utils/businessClientImages";
import StyledSlider from "./StyledSlider";

const BusinessClients: FC = () => {
  const settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Col
      className="sectionContainer d-flex justify-content-center py-42"
      id="about"
    >
      <Col className="col-12">
        <Row className="d-flex justify-content-center">
          <StyledSlider className="bg-white" {...settings}>
            {bussinessClintUrl.map((clients: any, index: number) => {
              return (
                <Col
                  key={index}
                  className="position-relative align-items-center d-flex p-0 m-0"
                >
                  <Col className={`justify-content-end px-0 mx-0`}>
                    <Card.Body className="justify-content-end px-0 mx-0">
                      <Row className="justify-content-center align-items-center p-0 m-0">
                        <Image
                          className="mb-3 w-75 h-75 d-flex justify-content-start align-self-center"
                          alt=""
                          loading="lazy"
                          src={`https://drive.google.com/thumbnail?sz=w3000&id=${clients}`}
                        />
                      </Row>
                    </Card.Body>
                  </Col>
                </Col>
              );
            })}
          </StyledSlider>
        </Row>
      </Col>
    </Col>
  );
};

export default BusinessClients;
