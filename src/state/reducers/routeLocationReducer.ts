import {
  SET_LOCATION,
  locationActionType,
  locationDto,
} from "../actions/types/locationType";

export interface locationState {
  routelocation: locationDto;
}
const initialState: locationState = {
  routelocation: { location: "/" },
};

export default function routeLocationReducer(
  state = initialState,
  action: locationActionType
): locationState {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        routelocation: action.payload,
      };
    default:
      return state;
  }
}
