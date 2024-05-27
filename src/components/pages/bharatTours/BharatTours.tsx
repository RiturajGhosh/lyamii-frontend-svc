import React, { FC, useEffect, useState } from "react";
import style from "./BharatTours.module.scss";
import { Col, Row } from "react-bootstrap";
import TourOverviewCard from "../../common/tourOverviewCard/TourOverviewCard";
import { getBharatToursApi } from "../../../api/bharatTours/getBharatToursApi";
import { useDispatch, useSelector } from "react-redux";
import { AllBharatTours } from "../../../state/selectors/selectBharatTours";
import { selectedTourDataDto } from "../../../state/actions/types/tourDataActionType";
import { SET_BHARAT_TOURS } from "../../../state/actions/types/bharatToursType";
import { parseTourDataArray } from "../../../utils/parseTourData";

const BharatTours: FC = () => {
  const tours: any = useSelector(AllBharatTours);
  const description =
    "Royal India Edition is a luxurious experience of diverse cultures, each adding its unique hues to the nation's identity. From the resplendent palaces that dot the landscape to the tales of mighty kings and queens who shaped the nation's destiny, the legacy of royal India resonates through its architecture, traditions, and captivating stories. Includes all 5 star luxury stays, cultural cuisines, domestic flights, day to day individual assistance and transfers.";
  const [tourList, setTourList] = useState<selectedTourDataDto[]>(tours);
  const dispatch = useDispatch();
  const fetchTours = async () => {
    const response = await getBharatToursApi();
    if (response.status === 200) {
      dispatch({
        type: SET_BHARAT_TOURS,
        payload: parseTourDataArray(response.data),
      });
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  useEffect(() => {
    tours?.length > 0 && setTourList(tours);
  }, [tours]);
  return (
    <TourOverviewCard
      tours={tourList}
      title="Royal India Edition"
      titleStyling={style.tourSection}
    >
      <Col className={`py-5 p-0 d-grid justify-content-center`}>
        <Row className="p-0">
          <Col className="text-dark align-self-center">
            <span className="text-start fs-16 text-wrap">{description} </span>
          </Col>
        </Row>
      </Col>
    </TourOverviewCard>
  );
};

export default BharatTours;
