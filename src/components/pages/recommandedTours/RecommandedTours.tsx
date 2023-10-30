import React, { FC, useEffect, useState } from "react";
import markers from "../../common/globe/markers";
import { Card, Col } from "react-bootstrap";
import HorizontalScroll from "../../common/horizontalScroll/HorizontalScroll";
import { getData } from "../../../api/getData";

const RecommandedTours: FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>(markers.slice(0, 10));
  const [page, setPage] = useState(0);

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
          <div className="card-img-container">
            <span className="card-img-text">Not available</span>
          </div>
          <div className="card-text-container">
            <Card.Title>{`${marker.city}-${index + 1}`}</Card.Title>
          </div>
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
