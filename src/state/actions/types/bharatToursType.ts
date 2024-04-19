import { selectedTourDataDto } from "./tourDataActionType";

export const SET_BHARAT_TOURS = "SET_BHARAT_TOURS";


interface SetBharatToursI {
  type: typeof SET_BHARAT_TOURS;
  payload: selectedTourDataDto[];
}

export type bharatToursActionType =
  | SetBharatToursI;
