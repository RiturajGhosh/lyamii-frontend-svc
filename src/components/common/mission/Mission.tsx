import React, { FC, useState } from "react";
import { Col, Row, Card, Container, Carousel } from "react-bootstrap";
import { internationalTours } from "../enum/enum";
import { useSelector } from "react-redux";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { missions } from "../enum/aboutUs";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Mission: FC = () => {
  const screenSize = useSelector(selectScreenSize);
  const [index, setIndex] = useState(0); // State to manage carousel index
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex); // Function to update selected index
  };
  return (
    <Container
      fluid="lg"
      style={{ background: "#f6f6f6" }}
      className="position-relative justify-content-center py-5"
    >
      <Col className="" id="#mission">
        <Col className="mx-4 d-flex">
          <h2
            className=""
            style={{
              fontSize: 50,
              fontFamily: "auto",
              fontWeight: "400",
              color: "black",
              position: "relative",
            }}
          >
            <img
              className="col-md-6 col-sm-6 col-lg-6 col-sx-7 col-9"
              src={require("../../../Assets/mission.png")}
            />
          </h2>{" "}
        </Col>
        <Col className="product-list flex-column" onScroll={(e) => {}}>
          <Carousel activeIndex={index} style={{ marginTop: "0px" }}>
            {missions.map((mission, idx) => (
              <Carousel.Item>
                <Col onClick={() => {}} key={idx} sm={12} xs={12}>
                  <Col className={`my-2 mx-1`}>
                    <Col className="p-0">
                      <p className="text-wrap text-dark p-3">{mission}</p>
                    </Col>
                  </Col>
                </Col>
              </Carousel.Item>
            ))}
          </Carousel>
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
            {index < 3 && (
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
      </Col>
    </Container>
  );
};

export default Mission;
