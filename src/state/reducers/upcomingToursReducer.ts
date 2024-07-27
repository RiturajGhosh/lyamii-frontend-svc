import {
  SET_UPCOMING_TOURS,
  UpcomingToursDto,
  upcomingToursDataType,
} from "../actions/types/upcomingToursDataType";

export interface upcomingToursState {
  upcomingTours: UpcomingToursDto;
}
const initialState: upcomingToursState = {
  upcomingTours: {
    packageId: "",
    prfDepatureDate: "",
    packageDetailsResponse: {},
    paymentDetail: {},
  },
};

export default function upcomingToursReducer(
  state = initialState,
  action: upcomingToursDataType
): upcomingToursState {
  switch (action.type) {
    case SET_UPCOMING_TOURS:
      return {
        ...state,
        upcomingTours: { ...action.payload },
      };

    default:
      return state;
  }
}
