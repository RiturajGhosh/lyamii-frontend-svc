import { selectedTourDataDto } from "./tourDataActionType";

export const SET_COMBO_TOURS = "SET_COMBO_TOURS";


interface SetComboToursI {
  type: typeof SET_COMBO_TOURS;
  payload: selectedTourDataDto[];
}

export type comboToursActionType =
  | SetComboToursI;
