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
          {/* <div className="card-body p-0 m-0 w-25 align-items-center">
            {
              <>
                <span
                  className="display-5 p-0 m-0 align-self-center text-center justify-content-center mb-2 d-flex"
                  style={{
                    fontSize: 45,
                    fontWeight: "700",
                    color: "black",
                  }}
                >
                  Business Clients
                </span>
                <div
                  style={{
                    width: "15%",
                    height: 6,
                    borderRadius: "0px 0px 5px 5px",
                    background: "#879DFF",
                    margin: "0 auto",
                    position: "relative",
                    top: -10, // Adjust to position below the text
                    zIndex: 1,
                    marginBottom: 40,
                  }}
                ></div>
              </>
            }
          </div> */}
          <StyledSlider className="bg-white" {...settings}>
            {bussinessClintUrl.map((clients: any, index: number) => {
              return (
                <Col
                  key={index}
                  className="position-relative align-items-center d-flex p-0 m-0"
                >
                  <Col className={`justify-content-end px-0 mx-0`}>
                    <Card.Body className="justify-content-end px-0 mx-0">
                      {/* <Row className="d-flex justify-content-end col-12 flex-row flex-nowrap position-relative"> */}
                      <Row className="justify-content-center align-items-center p-0 m-0">
                        <Image
                          className="mb-3 w-75 h-75 d-flex justify-content-start align-self-center"
                          // style={{
                          //   width: "90dvi",
                          //   height: "100%",
                          // }}
                          alt=""
                          src={`https://drive.google.com/thumbnail?sz=w3000&id=${clients}`}
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
        </Row>
      </Col>
    </Col>
  );
};

export default BusinessClients;
