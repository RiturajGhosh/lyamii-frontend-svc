import {
  SET_SELECTED_TOUR_DATA,
  SET_TOUR_DATA,
  SET_TOUR_LOCATION,
  TourDataDto,
  selectedTourDataDto,
  tourDataActionType,
} from "../actions/types/tourDataActionType";

export interface tourDataState {
  selectedtourData: selectedTourDataDto;
  selectedTourLocation: TourDataDto;
  tourData: selectedTourDataDto[];
}
const initialState: any = {
  selectedtourData: {},
  selectedTourLocation: {
    id: "",
    city: "string",
    color: "string",
    coordinates: [],
    value: 0,
  },
  tourData: [
    {
      tourName: "",
      highlights: [],
      timeline: [],
      tourPrice: "",
      tourId: "",
      tourDays: "",
      recommendedDate: {
        checkout: "",
        lengthOfStay: 0,
        checkin: "",
      },
      topPhotos: [],
      acceptsWalletCredit: false,
      priceInfo: {
        priceBeforeDiscount: {
          currency: "INR",
          amountRounded: "",
        },
        discounts: [
          {
            itemType: "",
            description: "",
            name: "",
            productId: "",
            amount: "₹0",
            currency: "",
          },
        ],
      },
      basicTourData: {
        id: 0,
        photos: {
          main: {
            relativeUrl: "",
          },
        },
        location: {
          address: "",
          city: "",
          countryCode: "91",
        },
        starRating: {
          value: 0,
        },
      },
      description: [],
    },
  ],
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
    case SET_TOUR_LOCATION:
      return {
        ...state,
        selectedTourLocation: { ...action.payload },
      };
    default:
      return state;
  }
}
