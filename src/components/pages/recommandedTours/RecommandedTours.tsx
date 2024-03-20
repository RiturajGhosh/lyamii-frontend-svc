import React, { FC, useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import HorizontalScroll from "../../common/horizontalScroll/HorizontalScroll";
import { useHistory } from "react-router-dom";
import TourCard from "../../common/tourCard/TourCard";
import { tours } from "../mockData/destinations";
import { useDispatch } from "react-redux";
import { SET_SELECTED_TOUR_DATA } from "../../../state/actions/types/tourDataActionType";

const RecommandedTours: FC = () => {
  const [loading, setLoading] = useState(false);
  // const [tourlist, settourList] = useState<any[]>(tours);
  const [data] = useState<any[]>(tours.slice(0, 4));
  const [page, setPage] = useState(0);
  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    // getData(page).then((res) => setData([...data, ...res]));
    setLoading(false);
  }, [page]);

  return (
    <HorizontalScroll
      title={"Most Popular"}
      setPage={(e: any) => setPage(e)}
      page={page}
    >
      {data.map((tour, index) => (
        <Col
          md={6}
          lg={4}
          sx={12}
          sm={8}
          className="mx-md-3 col-12 d-inline-block position-relative"
        >
          <Card key={index} className={`p-0`}>
            <TourCard
              coordinates={[]}
              className={"small"}
              imageStyling={`img-fluid`}
              imageRatio={150}
              titleStyling="small"
              tourData={tour}
            />
          </Card>
          <Card.Text
            className="position-absolute top-0 bold mt-5 start-90 translate-middle fit-content my-4"
            style={{
              background: "#c4cdfe",
              color: "#0752a1",
              fontFamily: "NORWESTER",
            }}
            onClick={() => {
              dispatch({
                type: SET_SELECTED_TOUR_DATA,
                payload: tour,
              });
              history.push("/tour-detail");
            }}
          >
            {tour?.tourName && tour?.tourName}
          </Card.Text>
        </Col>
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
