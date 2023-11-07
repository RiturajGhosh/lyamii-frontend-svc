import { $CombinedState } from "redux";
import { RootStore } from "../store";
import { createSelector } from "@reduxjs/toolkit";
import { tourDataState } from "../reducers/tourDataReducer";

export const tourData = (state: RootStore): tourDataState => state.tourData;
export const selectTourData = createSelector(
  tourData,
  (statuses) => statuses.selectedtourData
);
