import {
  SET_GLOBE_DATA,
  SET_HOTELS,
  SET_SELECTED_LOCATION,
  globeDataActionType,
} from "../actions/types/globeDataActionType";

export interface globeDataState {
  hotels: any;
  globeData: any;
  selectedLocation: any;
}
const initialState: globeDataState = {
  globeData: [],
  selectedLocation: {
    id: "",
    city: "",
    color: "",
    coordinates: [],
    value: 0,
  },
  hotels: [],
};

export default function globeDataReducer(
  state = initialState,
  action: globeDataActionType
): globeDataState {
  switch (action.type) {
    case SET_GLOBE_DATA:
      return {
        ...state,
        globeData: { ...action.payload },
      };
    case SET_SELECTED_LOCATION:
      return {
        ...state,
        selectedLocation: { ...action.payload },
      };
    case SET_HOTELS:
      return {
        ...state,
        hotels: { ...action.payload },
      };
    default:
      return state;
  }
}
