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
const initialState: tourDataState = {
  selectedtourData: {
    displayName: {
      text: "",
    },
    showGeniusLoginMessage: false,
    mealPlanIncluded: {
      text: "",
      mealPlanType: "",
    },
    recommendedDatesLabel: null,
    isNewlyOpened: false,
    relocationMode: null,
    recommendedDate: {
      checkout: "",
      lengthOfStay: 0,
      checkin: "",
    },
    bookerExperienceContentUIComponentProps: [],
    topPhotos: [],
    location: {
      displayLocation: "",
      publicTransportDistanceDescription: null,
      beachDistance: null,
      skiLiftDistance: null,
      beachWalkingTime: null,
      geoDistanceMeters: null,
      nearbyBeachNames: [],
      mainDistance: null,
    },
    acceptsWalletCredit: false,
    matchingUnitConfigurations: {
      unitConfigurations: [
        {
          AllBeds: 0,
          Bathrooms: 0,
          Livingrooms: 0,
          Bedrooms: 0,
          Kitchens: 0,
          Units: 0,
          name: "",
          bedConfigurations: [
            {
              AllBeds: 0,
              beds: [
                {
                  type: 0,
                  count: 0,
                },
              ],
            },
          ],
          unitId: 0,
        },
      ],
      commonConfiguration: {
        localizedArea: null,
        bedConfigurations: [
          {
            beds: [
              {
                count: 0,
                type: 0,
              },
            ],
            AllBeds: 0,
          },
        ],
        unitId: 0,
        unitTypeNames: [],
        Units: 0,
        Kitchens: 0,
        name: null,
        Bedrooms: 0,
        Bathrooms: 0,
        Livingrooms: 0,
        AllBeds: 0,
      },
    },
    priceDisplayInfoIrene: {
      priceBeforeDiscount: {
        amountPerStay: {
          currency: "INR",
          amountRounded: "₹0",
        },
      },
      taxExceptions: [],
      discounts: [
        {
          itemType: "",
          description: {
            translation: "",
          },
          name: "",
          productId: "",
          amount: {
            amount: "₹0",
            currency: "",
          },
        },
      ],
      chargesInfo: {
        translation: "",
      },
      badges: [
        {
          identifier: "",
          tooltip: {
            translation: "",
          },
        },
      ],
    },
    basicPropertyData: {
      id: 0,
      photos: {
        main: {
          lowResJpegUrl: {
            relativeUrl: "",
          },
          highResUrl: {
            relativeUrl: "",
          },
          highResJpegUrl: {
            relativeUrl: "",
          },
          lowResUrl: {
            relativeUrl: "",
          },
        },
      },
      location: {
        address: "",
        city: "",
        countryCode: "",
      },
      alternativeExternalReviewsScore: null,
      pageName: "",
      isClosed: false,
      starRating: {
        showAdditionalInfoIcon: false,
        caption: {
          translation: "",
        },
        value: 0,
        symbol: "",
      },
      paymentConfig: null,
      reviewScore: {
        score: 0,
        totalScoreTextTag: {
          translation: "",
        },
        showSecondaryScore: false,
        secondaryScore: 0,
        showScore: true,
        reviewCount: 0,
        secondaryTextTag: {
          translation: null,
        },
      },
      externalReviewScore: null,
      ufi: -2104807,
    },
    policies: {
      showNoPrepayment: false,
      enableJapaneseUsersSpecialCase: null,
      showFreeCancellation: false,
    },
    description: null,
  },
  selectedTourLocation: {
    id: "",
    city: "string",
    color: "string",
    coordinates: [],
    value: 0,
  },
  tourData: [
    {
      displayName: {
        text: "",
      },
      showGeniusLoginMessage: false,
      mealPlanIncluded: {
        text: "",
        mealPlanType: "",
      },
      recommendedDatesLabel: null,
      isNewlyOpened: false,
      relocationMode: null,
      recommendedDate: {
        checkout: "",
        lengthOfStay: 0,
        checkin: "",
      },
      bookerExperienceContentUIComponentProps: [],
      topPhotos: [],
      location: {
        displayLocation: "",
        publicTransportDistanceDescription: null,
        beachDistance: null,
        skiLiftDistance: null,
        beachWalkingTime: null,
        geoDistanceMeters: null,
        nearbyBeachNames: [],
        mainDistance: null,
      },
      acceptsWalletCredit: false,
      matchingUnitConfigurations: {
        unitConfigurations: [
          {
            AllBeds: 0,
            Bathrooms: 0,
            Livingrooms: 0,
            Bedrooms: 0,
            Kitchens: 0,
            Units: 0,
            name: "",
            bedConfigurations: [
              {
                AllBeds: 0,
                beds: [
                  {
                    type: 0,
                    count: 0,
                  },
                ],
              },
            ],
            unitId: 0,
          },
        ],
        commonConfiguration: {
          localizedArea: null,
          bedConfigurations: [
            {
              beds: [
                {
                  count: 0,
                  type: 0,
                },
              ],
              AllBeds: 0,
            },
          ],
          unitId: 0,
          unitTypeNames: [],
          Units: 0,
          Kitchens: 0,
          name: null,
          Bedrooms: 0,
          Bathrooms: 0,
          Livingrooms: 0,
          AllBeds: 0,
        },
      },
      priceDisplayInfoIrene: {
        priceBeforeDiscount: {
          amountPerStay: {
            currency: "INR",
            amountRounded: "₹0",
          },
        },
        taxExceptions: [],
        discounts: [
          {
            itemType: "",
            description: {
              translation: "",
            },
            name: "",
            productId: "",
            amount: {
              amount: "₹0",
              currency: "",
            },
          },
        ],
        chargesInfo: {
          translation: "",
        },
        badges: [
          {
            identifier: "",
            tooltip: {
              translation: "",
            },
          },
        ],
      },
      basicPropertyData: {
        id: 0,
        photos: {
          main: {
            lowResJpegUrl: {
              relativeUrl: "",
            },
            highResUrl: {
              relativeUrl: "",
            },
            highResJpegUrl: {
              relativeUrl: "",
            },
            lowResUrl: {
              relativeUrl: "",
            },
          },
        },
        location: {
          address: "",
          city: "",
          countryCode: "",
        },
        alternativeExternalReviewsScore: null,
        pageName: "",
        isClosed: false,
        starRating: {
          showAdditionalInfoIcon: false,
          caption: {
            translation: "",
          },
          value: 0,
          symbol: "",
        },
        paymentConfig: null,
        reviewScore: {
          score: 0,
          totalScoreTextTag: {
            translation: "",
          },
          showSecondaryScore: false,
          secondaryScore: 0,
          showScore: true,
          reviewCount: 0,
          secondaryTextTag: {
            translation: null,
          },
        },
        externalReviewScore: null,
        ufi: -2104807,
      },
      policies: {
        showNoPrepayment: false,
        enableJapaneseUsersSpecialCase: null,
        showFreeCancellation: false,
      },
      description: null,
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
