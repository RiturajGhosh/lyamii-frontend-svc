import React, { FC, useEffect, useState } from "react";
import markers from "../../common/globe/markers";
import { Card, Col, Row } from "react-bootstrap";
import HorizontalScroll from "../../common/horizontalScroll/HorizontalScroll";
import { getData } from "../../../api/getData";
import style from "./Coursel.module.scss";
import { FaPlane } from "react-icons/fa6";
import { useHistory } from "react-router-dom";

const Coursel: FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>(markers.slice(0, 10));
  const [page, setPage] = useState(0);
  const history = useHistory();

  useEffect(() => {
    getData(page).then((res:any) => setData([...data, ...res]));
    setLoading(false);
  }, [page]);

  return (
    <HorizontalScroll
      // title={"Recomanded"}
      setPage={(e: any) => setPage(e)}
      page={page}
    >
      {data.map((marker, index) => (
        <Card key={index} className={`d-inline-block mx-1 p-0 m-0`}>
          <Card.Img
            className={`p-0 m-0 justify-content-center
           ${style.reasonCard}`}
            style={{
              // width: "100%",
              padding: "0px !important",
              margin: "0px !important",
            }}
            onClick={() => history.push("/tour-detail")}
            src={require("../../../Assets/header.jpg")}
          />{" "}
          <Card.Body className="py-0">
            <div className="triangle-transparent w-0 position-absolute top-0 start-0 text-white translate-x-30"></div>
            <div className="triangle-reverse-transparent w-10 position-absolute top-0 start-90 text-white translate-x-20"></div>

            <div className="triangle-5 w-30 position-absolute top-0 start-0 text-white translate-x-20"></div>

            <div className="triangle-3 mt-3 w-30 position-absolute top-0 start-0 translate-x-20 translate-y-20"></div>
            <div
              className="triangle-4 mt-3 w-30 position-absolute top-0 start-0 translate-x-20 translate-y-20"
              style={{ width: "33% !important" }}
            ></div>
            <div className="triangle-reverse-5 w-10 position-absolute top-50 start-90 text-white translate-x-20"></div>

            <div className="triangle-reverse-4 w-10 position-absolute top-50 start-90 translate-x-20 translate-y-10"></div>

            <Col className="m-3 position-absolute top-0 text-white">
              <Row>
                <Col className="display-1 bold p-0 m-0 text-end">BALI</Col>
                <Col className="p-0 align-self-center m-0 fit-content">
                  <Col className="h2 bold p-0 text-start m-0">HOLIDAY</Col>
                  <Col className="h2 bold p-0 text-start m-0">PACKAGE</Col>
                </Col>
              </Row>
              <Col className="display-6 bold text-center text-dark p-0 m-0">
                SAVE UPTO
              </Col>
              <Col className="display-6 bold text-center text-dark p-0 m-0">5000/-</Col>
            </Col>
          </Card.Body>
          {/* <Card.Body className="py-0">
            <Card.Text className="bold p p-2 text-white position-absolute text-shadow-dark fw-bold top-0 start-0">
              {marker.days}
              {"D"}
            </Card.Text>
            {marker.tourType ? (
              <Card.Text className="bold w-100 justify-content-center p p-2 text-white d-flex flex-nowrap text-shadow-dark position-absolute fw-bold top-50 translate-middle start-50">
                {marker.tourType}
              </Card.Text>
            ) : (
              <Card.Text className="bold p p-2 text-white d-flex flex-nowrap text-shadow-dark position-absolute fw-bold top-50 translate-middle start-50">
                {marker.from}
                <FaPlane className="mx-2 my-1 box-shadow-lg" />
                {marker.to}
              </Card.Text>
            )}
          </Card.Body> */}
        </Card>
      ))}
      {loading && (
        <div className="spinner-box h-100 ">
          <Col className="p-0 h-100 m-0">
            <div className="circle-border">
              <div className="circle-core"></div>
            </div>
          </Col>
        </div>
      )}
    </HorizontalScroll>
  );
};

export default Coursel;
