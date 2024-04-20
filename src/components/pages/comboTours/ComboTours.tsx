import React, { FC, useEffect, useState } from "react";
import style from "./ComboTours.module.scss";
import TourOverviewCard from "../../common/tourOverviewCard/TourOverviewCard";
import { getComboToursApi } from "../../../api/comboTours/getComboToursApi";
import { useDispatch, useSelector } from "react-redux";
import { AllComboTours } from "../../../state/selectors/selectComboTours";
import { SET_COMBO_TOURS } from "../../../state/actions/types/comboToursType";
import { selectedTourDataDto } from "../../../state/actions/types/tourDataActionType";

const ComboTours: FC = () => {
  const tours = useSelector(AllComboTours);
  const [tourList, setTourList] = useState<selectedTourDataDto[]>(tours.tours);
  const dispatch = useDispatch();
  const fetchTours = async () => {
    const response = await getComboToursApi();
    dispatch({
      type: SET_COMBO_TOURS,
      payload: response,
    });
  };
  useEffect(() => {
    fetchTours();
  }, []);

  useEffect(() => {
    console.log(tours)
    tours?.length > 0 && setTourList(tours);
  }, [tours]);
  return (
    <TourOverviewCard
      tours={tourList}
      titleStyling={style.tourSection}
      title="Combos"
    ></TourOverviewCard>
  );
};

export default ComboTours;
