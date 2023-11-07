import { createSelector } from "@reduxjs/toolkit";
import { RootStore } from "../store";
import { locationActionType } from "../actions/types/locationType";
import { locationState } from "../reducers/routeLocationReducer";

export const getLocation = (state: RootStore): locationState =>
  state.routeLocation;
export const routePathname = createSelector(
  getLocation,
  (statuses) => statuses.routelocation.location
);
