import { RootStore } from "../store";
import { comboToursState } from "../reducers/comboToursReducer";
import { createSelector } from "@reduxjs/toolkit";

export const selectComboTours = (state: RootStore): comboToursState =>
  state.comboTours;

export const AllComboTours = createSelector(
  selectComboTours,
  (statuses) => statuses.tours
);
