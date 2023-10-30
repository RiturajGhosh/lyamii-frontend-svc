import React, { FC, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { internationalTours } from "../../common/enum/enum";
import style from "./BeyoundObvious.module.scss";
import { FaPlane } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";

const BeyoundObvious: FC = () => {
  const screenSize = useSelector(selectScreenSize);
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
    <Container className="position-relative">
      <Row>
        <Col md={12} lg={3} className="card-body m-auto">
          {
            <h1 className="heading card-text text-color-yellow-blue fw-bold">
              Beyound Obvious
            </h1>
          }
        </Col>
        {screenSize.isDesktop && (
          <Col
            md={12}
            lg={12}
            className="justify-content-between p-0 d-flex overflow-auto"
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
                        src={option.path}
                      />
                      <Card.Body className="py-0">
                        <Card.Text className="bold p p-2 text-white position-absolute text-shadow-dark fw-bold top-0 start-0">
                          {"10 D"}
                        </Card.Text>
                        <Card.Text className="bold p p-2 text-white position-absolute text-shadow-dark fw-bold top-0 end-0">
                          {"1.5L"}
                        </Card.Text>
                        <Card.Text className="bold p p-2 text-white d-flex flex-nowrap text-shadow-dark position-absolute fw-bold top-50 translate-middle start-50">
                          {option.from}
                          <FaPlane className="mx-2 my-1 box-shadow-lg" />
                          {option.to}
                        </Card.Text>
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
                <Col onClick={() => {}} key={idx} sm={12} xs={12}>
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
