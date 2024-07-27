import { selectedTourDataDto } from "./tourDataActionType";

export const SET_DAILY_TOUR_DETAIL_DATA = "SET_DAILY_TOUR_DETAIL_DATA";
export const SET_DAILY_TOUR_OVERVIEW_DATA = "SET_DAILY_TOUR_OVERVIEW_DATA";
export const SET_ONGOING_TOUR_DETAIL = "SET_ONGOING_TOUR_DETAIL";

export interface DailyTourDetailDto {
  dayNo: Number;
  heading: string;
  shortDesc: string;
  location: string;
  morning: Breakfast;
  afternoon: Lunch;
  evening: Sunset;
  night: Party;
}
export interface Breakfast {
  Breakfast: Period;
}
export interface Lunch {
  Lunch: Period;
}
export interface Sunset {
  Sunset: Period;
}
export interface Party {
  Party: Period;
}
export interface Period {
  desc: string;
  location: string;
}
export interface DailyTourOverviewDto {
  dayNo: number;
  packageId: string;
  heading: string;
  shortDesc: string;
}
interface SetDailyTourDetailData {
  type: typeof SET_DAILY_TOUR_DETAIL_DATA;
  payload: DailyTourDetailDto;
}
interface SetDailyTourOverviewData {
  type: typeof SET_DAILY_TOUR_OVERVIEW_DATA;
  payload: DailyTourOverviewDto;
}
interface SetOnGoingTourDetail {
  type: typeof SET_ONGOING_TOUR_DETAIL;
  payload: selectedTourDataDto;
}

export type dailyTourDetailDataType =
  | SetOnGoingTourDetail
  | SetDailyTourDetailData
  | SetDailyTourOverviewData;
