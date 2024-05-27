import {
  SET_DASHBOARD_DATA,
  UserDashboardDto,
  userDashboardDataType,
} from "../actions/types/userDashboardDataType";

export interface userDashboardState {
  userDashboardDetail: UserDashboardDto;
}
const initialState: userDashboardState = {
  userDashboardDetail: {
    userFirstName: "Archit",
    userLastName: "Agrawal",
    greeting: "Good Afternoon",
    ongoingTourSingleDayBrief: {
      dayNo: 1,
      packageId: "RIE07",
      heading: "Day 1 Heading",
      shortDesc:
        "Short Description for the package denoted by Package Id for day dayNo of the trip",
    },
  },
};

export default function userDashboardReducer(
  state = initialState,
  action: userDashboardDataType
): userDashboardState {
  switch (action.type) {
    case SET_DASHBOARD_DATA:
      return {
        ...state,
        userDashboardDetail: { ...action.payload },
      };

    default:
      return state;
  }
}
