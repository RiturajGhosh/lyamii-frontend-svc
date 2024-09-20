import { createSelector } from "@reduxjs/toolkit";
import { RootStore } from "../store";

export const selectScreenSize = (state: RootStore) => state.screenSize;

export const selectIsMobile = createSelector(
  selectScreenSize,
  (statuses): any => statuses.isMobile
);
export const selectIsTab = createSelector(
  selectScreenSize,
  (statuses): any => statuses.isTab
);
export const selectIsDesktop = createSelector(
  selectScreenSize,
  (statuses): any => statuses.isDesktop
);
