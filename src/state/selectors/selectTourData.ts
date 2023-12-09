import { $CombinedState } from "redux";
import { RootStore } from "../store";
import { createSelector } from "@reduxjs/toolkit";
import { tourDataState } from "../reducers/tourDataReducer";
import { TourDataDto, selectedTourDataDto } from "../actions/types/tourDataActionType";

export const tourAllData = (state: RootStore): tourDataState => state.tourData;
export const selectTourData = createSelector(
  tourAllData,
  (statuses): selectedTourDataDto => statuses.selectedtourData
);
export const selectTourLocation = createSelector(
  tourAllData,
  (statuses):TourDataDto => statuses.selectedTourLocation
);
export const tourData = createSelector(
  tourAllData,
  (statuses):selectedTourDataDto[] => statuses.tourData
);
