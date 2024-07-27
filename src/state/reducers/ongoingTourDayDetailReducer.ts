import {
  DailyTourDetailDto,
  DailyTourOverviewDto,
  SET_DAILY_TOUR_DETAIL_DATA,
  SET_DAILY_TOUR_OVERVIEW_DATA,
  SET_ONGOING_TOUR_DETAIL,
  dailyTourDetailDataType,
} from "../actions/types/dailyTourDetailDataType";
import { selectedTourDataDto } from "../actions/types/tourDataActionType";

export interface dailyTourDetailState {
  onGoingTourDetail: any;
  dailyTourOverview: DailyTourOverviewDto[];
  dailyTourDetail: DailyTourDetailDto;
}
const initialState: dailyTourDetailState = {
  onGoingTourDetail: {},
  dailyTourOverview: [
    {
      dayNo: 1,
      packageId: "RIE07",
      heading: "Day 1 Heading",
      shortDesc:
        "Short Description for the package denoted by Package Id for day dayNo of the trip",
    },
    {
      dayNo: 2,
      packageId: "RIE07",
      heading: "Day 1 Heading",
      shortDesc:
        "Short Description for the package denoted by Package Id for day dayNo of the trip",
    },
    {
      dayNo: 3,
      packageId: "RIE07",
      heading: "Day 1 Heading",
      shortDesc:
        "Short Description for the package denoted by Package Id for day dayNo of the trip",
    },
  ],
  dailyTourDetail: {
    dayNo: 1,
    heading: "Day 1 Heading",
    shortDesc:
      "Short Description for the package denoted by Package Id for day dayNo of the trip",
    location: "stayLocation",
    morning: {
      Breakfast: {
        desc: "Have Breakfast At ABC Restaurant",
        location: "locationLink",
      },
    },
    afternoon: {
      Lunch: { desc: "Eat Lunch At XYZ", location: "locationLink" },
    },
    evening: {
      Sunset: { desc: "Watch Sunset At XYZ Beach", location: "locationLink" },
    },
    night: {
      Party: { desc: "Have Party in House Boat", location: "locationLink" },
    },
  },
};

export default function ongoingTourDayDetailReducer(
  state = initialState,
  action: dailyTourDetailDataType
): dailyTourDetailState {
  switch (action.type) {
    case SET_DAILY_TOUR_DETAIL_DATA:
      return {
        ...state,
        dailyTourDetail: { ...action.payload },
      };

    case SET_DAILY_TOUR_OVERVIEW_DATA:
      return {
        ...state,
        dailyTourOverview: [{ ...action.payload }],
      };

    case SET_ONGOING_TOUR_DETAIL:
      return {
        ...state,
        onGoingTourDetail: { ...action.payload },
      };

    default:
      return state;
  }
}
