import React, { FC, useState } from "react";
import { Col, Row, Card, Container, Carousel } from "react-bootstrap";
import { internationalTours } from "../enum/enum";
import { aboutText } from "../enum/aboutUs";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const AboutUs: FC = () => {
  const [index, setIndex] = useState(0); // State to manage carousel index
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex); // Function to update selected index
  };
  return (
    <Container
      fluid="lg"
      className="position-relative justify-content-center py-5"
    >
      <Row className="" id="#aboutus">
        <Col className="justify-content-end align-self-end d-flex">
          <img
            className="w-100"
            style={{ height: "400px", objectFit: "contain" }}
            src={
              "https://drive.google.com/thumbnail?sz=w3000&id=1Gif99SQRP7WDi_6oDT4gmb1Y5tyttiHn"
            }
          />
        </Col>
        <Col
          md={7}
          lg={7}
          className="product-list flex-column d-flex align-items-start"
          onScroll={(e) => {}}
        >
          <Col>
            <Carousel activeIndex={index} style={{ marginTop: "0px" }}>
              {aboutText.map((option, idx) => (
                <Carousel.Item>
                  <Col onClick={() => {}} key={idx} sm={12} xs={12}>
                    <Col className={`my-2 mx-2`}>
                      <Col className="p-0 w-md-75 justify-content-end">
                        <p className="text-wrap text-dark p-1">{option}</p>
                      </Col>
                    </Col>
                  </Col>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Row className="w-100 justify-content-between">
            {index > 0 && (
              <button
                className={`btn btn-circle d-flex justify-items-center`}
                onClick={() => handleSelect(index - 1)}
              >
                <Col xs={4} className="social-icons align-self-center w-100">
                  <FaArrowLeftLong size={"20px"} />
                </Col>
              </button>
            )}
            {index < 4 && (
              <button
                className={`btn btn-circle d-flex float-end justify-items-center`}
                onClick={() => handleSelect(index + 1)}
              >
                <Col xs={4} className="social-icons align-self-center w-100">
                  <FaArrowRightLong size={"20px"} />
                </Col>
              </button>
            )}
          </Row>
        </Col>
      </Row>{" "}
    </Container>
  );
};

export default AboutUs;
