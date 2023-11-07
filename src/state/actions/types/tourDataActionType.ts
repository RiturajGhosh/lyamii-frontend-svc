export const SET_SELECTED_TOUR_DATA = "SET_SELECTED_TOUR_DATA";
export const SET_TOUR_DATA = "SET_TOUR_DATA";

export interface TourDataDto {
  id: string;
  city: string;
  color: string;
  coordinates: number[];
  value: number;
}
interface SetTourDataI {
  type: typeof SET_TOUR_DATA;
  payload: TourDataDto;
}

interface SetSelectedTourData {
  type: typeof SET_SELECTED_TOUR_DATA;
  payload: any;
}
export type tourDataActionType =
  | SetTourDataI
  | SetSelectedTourData;
