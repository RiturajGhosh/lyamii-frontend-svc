import {
  SET_UPCOMING_TOURS,
  // UpcomingToursDto,
  upcomingToursDataType,
} from "../actions/types/upcomingToursDataType";

export interface upcomingToursState {
  upcomingTours: any;
}
const initialState: upcomingToursState = {
  upcomingTours: [
    {
      packageId: "RIE07",
      prfDepatureDate: "2024-05-29T18:30:00.000+00:00",
      packageDetailsResponse: {
        packageId: "RIE07",
        packageName: "The Eastern India",
        title: "Enlighenment of Eastern India",
        description:
          "Welcome to Kolk\nImmerse Yourself\nIndulge Your Senses\nEngage With The\nKolkata's Warmth",
        overview: "Overview East India",
        highlights: [],
        noOfDays: 7,
        itinerary: [],
        includes: [],
        destinations: [],
        packagePrice: [],
        rating: 5,
        currencyLabel: "INR",
        tripType: "BACKPACKER",
        country: "India",
        imageUri: [
          "15g5EvDhBSNxSSEgZ_sryNZhqic0EB5lm",
          "15g5EvDhBSNxSSEgZ_sryNZhqic0EB5lm",
        ],
      },
    },
    {
      packageId: "E01",
      prfDepatureDate: "2024-06-29T18:30:00.000+00:00",
      packageDetailsResponse: {
        packageId: "E01",
        packageName: "Egypt Tour",
        title: "Pharaoh",
        description:
          "Egypt, a country steeped in history and mystique, offers travellers an extraordinary journey through time. From the magnificent pyramids of Giza to the vibrant marine life of the Red Sea, Egypt is a treasure trove of captivating experiences.\nDive into a world of technicolor coral gardens, encounter graceful sea turtles and playful dolphins, and marvel at the kaleidoscope of tropical fish in Red Sea. If you prefer relaxation, the Red Sea's idyllic beaches offer a tranquil escape.",
        overview: "Overview Egypt",
        highlights: [],
        noOfDays: 10,
        itinerary: [],
        includes: [],
        destinations: [],
        packagePrice: [],
        rating: 5,
        currencyLabel: "INR",
        tripType: "BACKPACKER",
        country: "Egypt",
        imageUri: ["15g5EvDhBSNxSSEgZ_sryNZhqic0EB5lm"],
      },
    },
  ],
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
