import React, { FC } from "react";
import { bharatTours } from "../../common/enum/enum";
import style from "./ComboTours.module.scss";
import TourOverviewCard from "../../common/tourOverviewCard/TourOverviewCard";

const ComboTours: FC = () => {
  return (
    <TourOverviewCard
      tours={bharatTours}
      titleStyling={style.tourSection}
      title="Combos"
    ></TourOverviewCard>
  );
};

export default ComboTours;
