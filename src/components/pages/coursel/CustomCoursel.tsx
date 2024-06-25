import React, { FC, useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import HorizontalScroll from "../../common/horizontalScroll/HorizontalScroll";
import style from "./Coursel.module.scss";
import { useHistory } from "react-router-dom";

type CustomCourselType = {
  page: number;
  setPage?: Function;
  data: any;
};
const CustomCoursel: FC<CustomCourselType> = ({ page = 0, setPage, data }) => {
  const history = useHistory();

  return (
    <HorizontalScroll
      // title={"Recomanded"}
      background="bg-dark"
      setPage={(e: any) => (setPage ? setPage(e) : {})}
      page={page}
    >
      {data ? (
        data?.map((marker: any, index: number) => (
          <Card key={index} className={`d-inline-block m-0 mx-1`}>
            <Card.Img
              className={`p-0 m-0 justify-content-center
           ${style.img}`}
              style={{
                // width: "100%",
                padding: "0px !important",
                margin: "0px !important",
              }}
              onClick={() => history.push(`/tour-detail:${marker.packageId}`)}
              src={require("../../../Assets/header.jpg")}
            />{" "}
            {/* <Card.Body className="py-0">
              <div className="triangle-5 w-30 position-absolute top-0 start-0 translate-x-20"></div>

              <div className="triangle-4 mt-3 w-30 position-absolute top-0 start-0 translate-x-20"></div>
            </Card.Body> */}
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
        ))
      ) : (
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

export default CustomCoursel;
