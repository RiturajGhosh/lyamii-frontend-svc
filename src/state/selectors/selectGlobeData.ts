import { RootStore } from "../store";
import { createSelector } from "@reduxjs/toolkit";
import { globeDataState } from "../reducers/globeDataReducer";

export const selectGlobeData = (state: RootStore): globeDataState =>
  state.globeData;
export const selectedLocation = createSelector(
  selectGlobeData,
  (statuses) => statuses.selectedLocation
);
