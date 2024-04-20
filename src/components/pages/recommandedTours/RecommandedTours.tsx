import React, { FC, useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import HorizontalScroll from "../../common/horizontalScroll/HorizontalScroll";
import TourCard from "../../common/tourCard/TourCard";
import { useSelector } from "react-redux";
import { selectPopularPackage } from "../../../state/selectors/selectTourData";
import { selectedTourDataDto } from "../../../state/actions/types/tourDataActionType";

const RecommandedTours: FC = () => {
  const [loading, ] = useState(false);
  const popularTours = useSelector(selectPopularPackage);
  const [tourlist, setTourList] = useState<selectedTourDataDto[]>(popularTours);
  const [page, setPage] = useState(0);

  useEffect(() => {
    popularTours?.length > 0 && setTourList(popularTours);
  }, [popularTours]);
  return (
    <HorizontalScroll
      title={"Most Popular"}
      setPage={(e: any) => setPage(e)}
      page={page}
    >
      {tourlist?.map((tour, index) => (
        <Col
          md={6}
          lg={4}
          sx={12}
          sm={8}
          key={index}
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
