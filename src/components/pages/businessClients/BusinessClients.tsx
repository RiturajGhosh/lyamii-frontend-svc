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
      style={{ background: "#0852A1" }}
      id="about"
    >
      <Col className="col-12">
        <Row className="d-flex justify-content-center">
          <div className="card-body p-0 m-0 w-25 align-items-center">
            {
              <>
                <span
                  className="display-5 p-0 m-0 align-self-center text-center justify-content-center mb-5 d-flex text-white fw-bold"
                  style={{ fontFamily: "" }}
                >
                  Business Clients
                </span>
              </>
            }
          </div>

          <StyledSlider className="bg-white" {...settings}>
            {bussinessClintUrl.map((clients: any, index: number) => {
              return (
                <Col
                  key={index}
                  className="position-relative w-50 align-items-center d-flex p-0 m-0"
                >
                  <Col className={`justify-content-end px-0 mx-0`}>
                    <Card.Body className="justify-content-end px-0 mx-0">
                      {/* <Row className="d-flex justify-content-end col-12 flex-row flex-nowrap position-relative"> */}
                        <Row className="justify-content-center align-items-center p-0 m-0">
                          <Image
                            className="mb-3 w-100 d-flex justify-content-start align-self-center"
                            // style={{
                            //   width: "90dvi",
                            //   height: "100%",
                            // }}
                            alt=""
                            src={`https://drive.google.com/thumbnail?id=${clients}`}
                          />
                        </Row>

                        {/* <div className="col-4 position-absolute top-0 start-90 translate-middle-x pr-3"></div> */}
                      {/* </Row> */}
                    </Card.Body>
                  </Col>
                </Col>
              );
            })}
          </StyledSlider>
          {/* <Row className="bg-white slick-carousel" style={{ opacity: 1 }}>
            {bussinessClintUrl.map((clients: any, index: number) => {
              return (
                <Col
                  key={index}
                  className="position-relative w-50 align-items-center d-flex p-0 m-0"
                >
                  <Col className={`justify-content-end px-0 mx-0`}>
                    <Card.Body className="justify-content-end px-0 mx-0">
                      <Row className="d-flex justify-content-end col-12 flex-row flex-nowrap position-relative">
                        <Row className="justify-content-center align-items-center p-0 m-0">
                          <Image
                            className="mb-3 justify-content-start align-self-center"
                            style={{
                              width: "9dvi",
                            }}
                            alt=""
                            src={`https://drive.google.com/thumbnail?id=${clients}`}
                          />
                        </Row>

                        <div className="col-4 position-absolute top-0 start-90 translate-middle-x pr-3"></div>
                      </Row>
                    </Card.Body>
                  </Col>
                </Col>
              );
            })}
          </Row> */}
        </Row>
      </Col>
    </Col>
  );
};

export default BusinessClients;
