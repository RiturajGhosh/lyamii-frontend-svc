import {
  SET_GLOBE_DATA,
  SET_SELECTED_LOCATION,
  globeDataActionType,
} from "../actions/types/globeDataActionType";

export interface globeDataState{
  globeData: any,
  selectedLocation: any
}
const initialState: globeDataState = {
  globeData: [
    {
      id: 1,
      city: "Singapore",
      color: "red",
      coordinates: [1.3521, 103.8198],
      value: 100,
    },
    {
      id: 2,
      city: "New York",
      color: "red",
      coordinates: [40.73061, -73.935242],
      value: 100,
    },
    {
      id: 3,
      city: "San Francisco",
      color: "red",
      coordinates: [37.773972, -122.431297],
      value: 100,
    },
    {
      id: 4,
      city: "Beijing",
      color: "red",
      coordinates: [39.9042, 116.4074],
      value: 100,
    },
    {
      id: 5,
      city: "London",
      color: "red",
      coordinates: [51.5074, 0.1278],
      value: 100,
    },
    {
      id: 6,
      city: "Kolkata",
      color: "red",
      coordinates: [22.5726, 88.3639],
      value: 100,
    },
  ],
  selectedLocation: {},
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
    default:
      return state;
  }
}
