import { RootStore } from "../store";
import { bharatToursState } from "../reducers/bharatToursReducer";
import { createSelector } from "@reduxjs/toolkit";

export const selectBharatTours = (state: RootStore): bharatToursState =>
  state.bharatTours;
  
export const AllBharatTours = createSelector(
  selectBharatTours,
  (statuses) => statuses.tours
);
