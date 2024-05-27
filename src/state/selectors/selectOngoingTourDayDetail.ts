import { RootStore } from "../store";
import { dailyTourDetailState } from "../reducers/ongoingTourDayDetailReducer";
import { createSelector } from "@reduxjs/toolkit";
import { DailyTourDetailDto } from "../actions/types/dailyTourDetailDataType";

export const selectDailyTourDetail = (state: RootStore): dailyTourDetailState =>
  state.ongoingTourDayDetail;

export const selectOngoingTourDayDetail = createSelector(
  selectDailyTourDetail,
  (statuses) => statuses.dailyTourDetail
);

export const selectOngoingTourDayBriefDetail = createSelector(
  selectDailyTourDetail,
  (statuses) => statuses.dailyTourOverview
);
