import React, { FC, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { internationalTours } from "../../common/enum/enum";
import style from "./BeyoundObvious.module.scss";
import { FaPlane } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useHistory } from "react-router-dom";
import CommentIcon from "../../common/icon/commentIcon";

const BeyoundObvious: FC = () => {
  const screenSize = useSelector(selectScreenSize);
  const history = useHistory();
  const [products, setProducts] = useState(
    Array.from({ length: 10 }, (_, i) => `Product ${i + 1}`)
  ); // Initial set of products
  function handleScroll(e: any) {
    const element = e.target;
    if (element.scrollLeft + element.clientWidth >= element.scrollWidth) {
      loadMoreProducts();
    }
  }
  // Function to load more products
  const loadMoreProducts = () => {
    // Simulate fetching more products (you would typically make an API call here)
    setTimeout(() => {
      const newProducts = Array.from(
        { length: 10 },
        (_, i) => `Product ${products.length + i + 1}`
      );
      setProducts([...products, ...newProducts]);
    }, 1000);
  };
  return (
    <Container className="position-relative w-100">
      <Row>
        <Col
          md={12}
          lg={8}
          className="card-body position-absolute green top-0 end-0 m-auto"
        >
          <span
            className="display-3 text-outline fw-bold"
            style={{ color: "#efeacf" }}
          >
            BEYOUND
          </span>
          <span
            className="display-5 d-inline-flex text-outline fw-bold"
            style={{ color: "#4b7b57" }}
          >
            Obvious{" "}
            <img
              className={`inline-flex w-20 h-10`}
              style={{
                padding: "0px !important",
                margin: "0px !important",
              }}
              src={require("../../../Assets/indianflag.png")}
            />
          </span>
        </Col>
        <Col
          className="card-body w-10 float-left position-absolute mt-5 green top-0 start-100 m-auto translate-middle-x"
        >
          <span
            className="display-5 d-inline-flex justify-content-start mt-5 text-outline fw-bold"
            style={{ color: "#4b7b57" }}
          >
            <img
              className={`w-60 h-10 justify-content-end`}
              style={{
                padding: "0px !important",
                margin: "0px !important",
              }}
              src={require("../../../Assets/compass.png")}
            />
          </span>
        </Col>
        {screenSize.isDesktop && (
          <Col
            md={12}
            lg={12}
            className="border-5 border border-dark p-5 my-5 justify-content-between p-0 d-flex overflow-auto"
          >
            <Row className="w-100 justify-content-center scrolling-wrapper-flexbox">
              {internationalTours.map((option, idx) => (
                <Col key={idx} md={6} lg={6} className="py-2">
                  <Card className={`my-2 mx-1`}>
                    <Card.Body className="p-0">
                      <Card.Img
                        className={`p-0 m-0 justify-content-center ${style.reasonCard}`}
                        style={{
                          // width: "100%",
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        src={require("../../../Assets/backpacker.png")}
                      />
                      <Card.Body className="py-0">
                        {/* <Card.Text className="bold p p-2 text-white position-absolute text-shadow-dark fw-bold top-0 start-0">
                          {"10 D"}
                        </Card.Text> */}
                        <Card.Text className="bold col-3 p p-2 text-white position-absolute text-shadow-dark fw-bold bottom-0 end-0">
                          <Col className="col-12 h-100 border border-1 bg-success">1000$</Col>
                        </Card.Text>
                        <Card.Text className="bold p text-white position-absolute justify-content-center zi-0 text-shadow-dark fw-bold bottom-0 start-0">
                          <CommentIcon
                            className="rotate-20 flip-x"
                            height="90px"
                            width="90px"
                            fill="#5394ec"
                          />
                          <Card.Text className="bold p text-white justify-content-center  position-absolute zi-2 h-100 text-center align-items-center d-flex w-100 text-shadow-dark fw-bold bottom-0 start-0">
                            10D
                          </Card.Text>
                        </Card.Text>
                        {/* <Card.Text className="bold p p-2 text-white d-flex flex-nowrap text-shadow-dark position-absolute fw-bold top-50 translate-middle start-50">
                          {option.from}
                          <FaPlane className="mx-2 my-1 box-shadow-lg" />
                          {option.to}
                        </Card.Text> */}
                      </Card.Body>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        )}
        {screenSize.isMobile && (
          <Row>
            <div className="product-list" onScroll={(e) => handleScroll(e)}>
              {internationalTours.map((option, idx) => (
                <Col
                  onClick={() => history.push("/tour-detail")}
                  key={idx}
                  sm={12}
                  xs={12}
                >
                  <Card className={`my-2 mx-1`}>
                    <Card.Body className="p-0">
                      <Card.Img
                        className={`p-0 m-0 justify-content-center ${style.reasonCard}`}
                        style={{
                          // width: "100%",
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        src={option.path}
                      />
                      <Card.Body className="py-0">
                        <Card.Text className="bold p p-2 text-white position-absolute fw-bold top-0 start-0">
                          {"10 D"}
                        </Card.Text>
                        <Card.Text className="bold p p-2 text-white position-absolute fw-bold top-0 end-0">
                          {"1.5L"}
                        </Card.Text>
                        <Card.Text className="bold p p-2 text-white d-flex flex-nowrap position-absolute fw-bold top-50 translate-middle start-50">
                          {option.from}
                          <FaPlane className="mx-2 my-1" />
                          {option.to}
                        </Card.Text>
                      </Card.Body>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </div>
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default BeyoundObvious;
