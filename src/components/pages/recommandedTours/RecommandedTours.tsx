import React, { FC, useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import HorizontalScroll from "../../common/horizontalScroll/HorizontalScroll";
import TourCard from "../../common/tourCard/TourCard";
import { useSelector } from "react-redux";
import { selectPopularPackage } from "../../../state/selectors/selectTourData";
import { selectedTourDataDto } from "../../../state/actions/types/tourDataActionType";

const RecommandedTours: FC = () => {
  const [loading] = useState(false);
  const popularTours = useSelector(selectPopularPackage);
  const [tourlist, setTourList] = useState<selectedTourDataDto[]>(popularTours);
  const [page, setPage] = useState(0);

  useEffect(() => {
    popularTours?.length > 0 && setTourList(popularTours);
  }, [popularTours]);
  return (
    <>
      {tourlist.length > 0 ? (
        <>
          {" "}
          {tourlist?.map((tour, index) => (
            <TourCard tourData={tour} key={index} />
          ))}
        </>
      ) : (
        <Col className="h3">There is no Tour for this Destination</Col>
      )}
    </>
  );
};

export default RecommandedTours;
