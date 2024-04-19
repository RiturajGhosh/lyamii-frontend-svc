import { selectedTourDataDto } from "./tourDataActionType";

export const SET_BACKPACKER_TOURS = "SET_BACKPACKER_TOURS";

interface SetBackpackerToursI {
  type: typeof SET_BACKPACKER_TOURS;
  payload: selectedTourDataDto[];
}

export type backpackerToursActionType = SetBackpackerToursI;
