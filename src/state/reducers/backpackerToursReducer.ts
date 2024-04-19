import { SET_BACKPACKER_TOURS, backpackerToursActionType } from "../actions/types/backpackerToursType";

export interface backpackerToursState {
  tours: any;
}
const initialState: backpackerToursState = {
  tours: [],
};

export default function backpackerToursReducer(
  state = initialState,
  action: backpackerToursActionType
): backpackerToursState {
  switch (action.type) {
    case SET_BACKPACKER_TOURS:
      return {
        ...state,
        tours: [ ...action.payload ],
      };

    default:
      return state;
  }
}
