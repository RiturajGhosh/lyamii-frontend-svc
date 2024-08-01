import { createSelector } from "@reduxjs/toolkit";
import { RootStore } from "../store";

export const selectScreenSize = (state: RootStore) => state.screenSize;

export const selectIsMobile = createSelector(
  selectScreenSize,
  (statuses): any => statuses.isMobile
);