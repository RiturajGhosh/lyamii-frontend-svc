import React, { FC, useEffect, useState } from "react";
import markers from "../../common/globe/markers";
import { Card, Col } from "react-bootstrap";
import HorizontalScroll from "../../common/horizontalScroll/HorizontalScroll";
import { getData } from "../../../api/getData";
import style from "./RecommandedTours.module.scss";
import { FaPlane } from "react-icons/fa6";
import { useHistory } from "react-router-dom";

const RecommandedTours: FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>(markers.slice(0, 10));
  const [page, setPage] = useState(0);
  const history = useHistory();

  useEffect(() => {
    getData(page).then((res) => setData([...data, ...res]));
    setLoading(false);
  }, [page]);

  return (
    <HorizontalScroll
      title={"Recomanded"}
      setPage={(e: any) => setPage(e)}
      page={page}
    >
      {data.map((marker, index) => (
        <Card key={index} className={`d-inline-block mx-1`}>
          <Card.Img
            className={`p-0 m-0 justify-content-center ${style.reasonCard}`}
            style={{
              // width: "100%",
              padding: "0px !important",
              margin: "0px !important",
            }}
            onClick={() => history.push("/tour-detail")}
            src={require("../../../Assets/header.jpg")}
          />{" "}
          <Card.Body className="py-0">
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
          </Card.Body>
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

export default RecommandedTours;
