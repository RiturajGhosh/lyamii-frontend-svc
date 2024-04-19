import {
  SET_POPULAR_PACKAGE,
  SET_SELECTED_TOUR_DATA,
  SET_TOUR_DATA,
  SET_TOUR_LOCATION,
  SET_TOUR_PACKAGE_ID,
  TourDataDto,
  selectedTourDataDto,
  tourDataActionType,
} from "../actions/types/tourDataActionType";

export interface tourDataState {
  selectedtourData: selectedTourDataDto;
  selectedTourLocation: TourDataDto;
  selectTourPackageId: "";
  tours: selectedTourDataDto[];
  popularTour: selectedTourDataDto[];
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
  tours: [],
  popularTour: [],
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
    default:
      return state;
  }
}
