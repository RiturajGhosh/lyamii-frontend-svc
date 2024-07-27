import { RootStore } from "../store";
import { dailyTourDetailState } from "../reducers/ongoingTourDayDetailReducer";
import { createSelector } from "@reduxjs/toolkit";
import { DailyTourDetailDto } from "../actions/types/dailyTourDetailDataType";

export const selectOngoingTourDetails = (
  state: RootStore
): dailyTourDetailState => state.ongoingTourDayDetail;
export const selectOngoingTourDetail = createSelector(
  selectOngoingTourDetails,
  (statuses) => statuses.onGoingTourDetail
);

export const selectOngoingTourDayDetail = createSelector(
  selectOngoingTourDetails,
  (statuses) => statuses.dailyTourDetail
);

export const selectOngoingTourDayBriefDetail = createSelector(
  selectOngoingTourDetails,
  (statuses) => statuses.dailyTourOverview
);
