import {
  SET_SELECTED_TOUR_DATA,
  SET_TOUR_DATA,
  tourDataActionType,
} from "../actions/types/tourDataActionType";

export interface tourDataState {
  selectedtourData: any;
  tourData: any;
}
const initialState: tourDataState = {
  selectedtourData: {},
  tourData: [],
};

export default function tourDataReducer(
  state = initialState,
  action: tourDataActionType
): tourDataState {
  switch (action.type) {
    case SET_SELECTED_TOUR_DATA:
      return {
        ...state,
        selectedtourData: { ...action.payload },
      };
    case SET_TOUR_DATA:
      return {
        ...state,
        tourData: { ...action.payload },
      };
    default:
      return state;
  }
}
