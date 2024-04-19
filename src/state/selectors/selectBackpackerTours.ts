import { RootStore } from "../store";
import { backpackerToursState } from "../reducers/backpackerToursReducer";
import { createSelector } from "@reduxjs/toolkit";

export const selectBackpackerTours = (state: RootStore): backpackerToursState =>
  state.backpackerTours;

export const AllBackpackerTours = createSelector(
  selectBackpackerTours,
  (statuses) => statuses.tours
);
