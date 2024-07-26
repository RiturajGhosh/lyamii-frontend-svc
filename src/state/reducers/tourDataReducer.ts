import { departureData } from "../../components/common/tourDetailCard/TourUiData";
import {
  SET_NON_INDIAN_TOURS,
  SET_POPULAR_PACKAGE,
  SET_SELECTED_TOUR_DATA,
  SET_TOUR_DATA,
  SET_TOUR_LOCATION,
  SET_TOUR_PACKAGE_ID,
  TourDataDto,
  selectedTourDataDto,
  tourDataActionType,
  SET_SELECTED_TOUR_DEPARTURE_DATE,
} from "../actions/types/tourDataActionType";

export interface tourDataState {
  selectedtourData: selectedTourDataDto;
  selectedTourLocation: TourDataDto;
  selectTourPackageId: "";
  tours: selectedTourDataDto[];
  nonIndian: selectedTourDataDto[];
  popularTour: selectedTourDataDto[];
  departureDate: string;
}
const initialState: any = {
  selectedtourData: {},
  selectTourPackageId: "",
  selectedTourLocation: {
    id: "",
    city: "",
    color: "",
    coordinates: [],
    value: 0,
  },
  nonIndian: [],
  tours: [],
  popularTour: [],
  departureData: "",
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
        tours: [...action.payload],
      };
    case SET_TOUR_PACKAGE_ID:
      return {
        ...state,
        selectTourPackageId: action.payload,
      };
    case SET_POPULAR_PACKAGE:
      return {
        ...state,
        popularTour: [...action.payload],
      };

    case SET_TOUR_LOCATION:
      return {
        ...state,
        selectedTourLocation: { ...action.payload },
      };
    case SET_NON_INDIAN_TOURS:
      return {
        ...state,
        nonIndian: [...action.payload],
      };
    case SET_SELECTED_TOUR_DEPARTURE_DATE:
      return {
        ...state,
        departureDate: action.payload,
      };
    default:
      return state;
  }
}
