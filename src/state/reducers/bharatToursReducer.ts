import { SET_BHARAT_TOURS, bharatToursActionType } from "../actions/types/bharatToursType";

export interface bharatToursState {
  tours: any;
}
const initialState: bharatToursState = {
  tours: [],
};

export default function bharatToursReducer(
  state = initialState,
  action: bharatToursActionType
): bharatToursState {
  switch (action.type) {
    case SET_BHARAT_TOURS:
      return {
        ...state,
        tours: [ ...action.payload ],
      };

    default:
      return state;
  }
}
