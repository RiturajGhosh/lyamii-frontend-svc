import React, { FC, useEffect, useState } from "react";
import markers from "../../common/globe/markers";
import { Card, Col, Row } from "react-bootstrap";
import HorizontalScroll from "../../common/horizontalScroll/HorizontalScroll";
import { getData } from "../../../api/getData";
import style from "./RecommandedTours.module.scss";
import { FaPlane } from "react-icons/fa6";
import { useHistory } from "react-router-dom";
import CardWithShadow from "../../common/cardWithoutBorder/CardWithShadow";
import TourCard from "../../common/tourCard/TourCard";
import { tours } from "../mockData/destinations";

const RecentlyViewedTours: FC = () => {
  const [loading, setLoading] = useState(false);
  // const [tourlist, settourList] = useState<any[]>(tours);
  const [data, setData] = useState<any[]>(tours.slice(0, 4));
  const [page, setPage] = useState(0);
  const history = useHistory();

  useEffect(() => {
    // getData(page).then((res) => setData([...data, ...res]));
    setLoading(false);
  }, [page]);

  return (
    <HorizontalScroll
      title={"Recently Viewed"}
      setPage={(e: any) => setPage(e)}
      page={page}
    >
      {data.map((tour, index) => (
        <Col
          md={6}
          lg={4}
          sx={12}
          sm={8}
          className="mx-3 col-12 d-inline-block position-relative"
        >
          <Card key={index} className={`p-0`}>
            <TourCard
              coordinates={[]}
              className={"small"}
              imageStyling={`img-fluid`}
              imageRatio={150}
              titleStyling="small"
              tourname={tour?.displayName}
              mealPaln={tour?.mealPlanIncluded}
              recommendedDate={tour?.recommendedDate}
              location={tour?.location}
              acceptsWalletCredit={tour?.acceptsWalletCredit}
              unitConfigurations={tour?.matchingUnitConfigurations}
              price={tour?.priceDisplayInfoIrene}
              propertyData={tour?.basicPropertyData}
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

export default RecentlyViewedTours;
