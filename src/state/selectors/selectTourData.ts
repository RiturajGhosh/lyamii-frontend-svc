import { RootStore } from "../store";
import { createSelector } from "@reduxjs/toolkit";
import { tourDataState } from "../reducers/tourDataReducer";
import {
  TourDataDto,
  selectedTourDataDto,
} from "../actions/types/tourDataActionType";

export const tourData = (state: RootStore): tourDataState => state.tourData;
export const selectTourData = createSelector(
  tourData,
  (statuses): selectedTourDataDto => statuses.selectedtourData
);
export const selectTourPackageId = createSelector(
  tourData,
  (statuses): string => statuses.selectTourPackageId
);
export const selectTourLocation = createSelector(
  tourData,
  (statuses): TourDataDto => statuses.selectedTourLocation
);
export const tours = createSelector(
  tourData,
  (statuses): selectedTourDataDto[] => statuses.tours
);
export const selectPopularPackage = createSelector(
  tourData,
  (statuses): selectedTourDataDto[] => statuses.popularTour
);

export const selectNonIndianTours = createSelector(
  tourData,
  (statuses): selectedTourDataDto[] => statuses.nonIndian
);
