import {
  SET_COMBO_TOURS,
  comboToursActionType,
} from "../actions/types/comboToursType";

export interface comboToursState {
  tours: any;
}
const initialState: comboToursState = {
  tours: [],
};

export default function comboToursReducer(
  state = initialState,
  action: comboToursActionType
): comboToursState {
  switch (action.type) {
    case SET_COMBO_TOURS:
      return {
        ...state,
        tours: [ ...action.payload ],
      };

    default:
      return state;
  }
}
