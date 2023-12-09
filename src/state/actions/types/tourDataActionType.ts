export const SET_SELECTED_TOUR_DATA = "SET_SELECTED_TOUR_DATA";
export const SET_TOUR_DATA = "SET_TOUR_DATA";
export const SET_TOUR_LOCATION = "SET_TOUR_LOCATION";

export interface TourDataDto {
  id: string;
  city: string;
  color: string;
  coordinates: number[];
  value: number;
}
interface SetTourLocation {
  type: typeof SET_TOUR_LOCATION;
  payload: TourDataDto;
}
export interface selectedTourDataDto {
  displayName: DisplayName;
  showGeniusLoginMessage: boolean;
  mealPlanIncluded: MealPlanIncluded;
  recommendedDatesLabel: null;
  isNewlyOpened: boolean;
  relocationMode: null;
  recommendedDate: RecommendedDate;
  bookerExperienceContentUIComponentProps: any[];
  topPhotos: any[];
  location: Location;
  acceptsWalletCredit: boolean;
  matchingUnitConfigurations: MatchingUnitConfigurations;
  priceDisplayInfoIrene: PriceDisplayInfoIrene;
  basicPropertyData: BasicPropertyData;
  policies: Policies;
  description: null;
}

export interface BasicPropertyData {
  id: number;
  photos: Photos;
  location: BasicPropertyDataLocation;
  alternativeExternalReviewsScore: null;
  pageName: string;
  isClosed: boolean;
  starRating: StarRating;
  paymentConfig: null;
  reviewScore: ReviewScore;
  externalReviewScore: null;
  ufi: number;
}

export interface BasicPropertyDataLocation {
  address: string;
  city: string;
  countryCode: string;
}

export interface Photos {
  main: Main;
}

export interface Main {
  lowResJpegUrl: URL;
  highResUrl: URL;
  highResJpegUrl: URL;
  lowResUrl: URL;
}

export interface URL {
  relativeUrl: string;
}

export interface ReviewScore {
  score: number;
  totalScoreTextTag: ChargesInfo;
  showSecondaryScore: boolean;
  secondaryScore: number;
  showScore: boolean;
  reviewCount: number;
  secondaryTextTag: ChargesInfo;
}

export interface ChargesInfo {
  translation: null | string;
}

export interface StarRating {
  showAdditionalInfoIcon: boolean;
  caption: ChargesInfo;
  value: number;
  symbol: string;
}

export interface DisplayName {
  text: string;
}

export interface Location {
  displayLocation: string;
  publicTransportDistanceDescription: null;
  beachDistance: null;
  skiLiftDistance: null;
  beachWalkingTime: null;
  geoDistanceMeters: null;
  nearbyBeachNames: any[];
  mainDistance: null;
}

export interface MatchingUnitConfigurations {
  unitConfigurations: Configuration[];
  commonConfiguration: Configuration;
}

export interface Configuration {
  localizedArea?: null;
  bedConfigurations: BedConfiguration[];
  unitId: number;
  unitTypeNames?: any[];
  Units: number;
  Kitchens: number;
  name: null | string;
  Bedrooms: number;
  Bathrooms: number;
  Livingrooms: number;
  AllBeds: number;
}

export interface BedConfiguration {
  AllBeds: number;
  beds: Bed[];
}

export interface Bed {
  type: number;
  count: number;
}

export interface MealPlanIncluded {
  text: string;
  mealPlanType: string;
}

export interface Policies {
  showNoPrepayment: boolean;
  enableJapaneseUsersSpecialCase: null;
  showFreeCancellation: boolean;
}

export interface PriceDisplayInfoIrene {
  priceBeforeDiscount: PriceBeforeDiscount;
  taxExceptions: any[];
  discounts: Discount[];
  chargesInfo: ChargesInfo;
  badges: Badge[];
}

export interface Badge {
  identifier: string;
  tooltip: ChargesInfo;
}

export interface Discount {
  itemType: string;
  description: ChargesInfo;
  name: string;
  productId: string;
  amount: Amount;
}

export interface Amount {
  amount: string;
  currency: string;
}

export interface PriceBeforeDiscount {
  amountPerStay: AmountPerStay;
}

export interface AmountPerStay {
  currency: string;
  amountRounded: string;
}

export interface RecommendedDate {
  checkout: string;
  lengthOfStay: number;
  checkin: string;
}

interface SetSelectedTourData {
  type: typeof SET_SELECTED_TOUR_DATA;
  payload: selectedTourDataDto;
}
interface SetTourData {
  type: typeof SET_TOUR_DATA;
  payload: selectedTourDataDto[];
}
export type tourDataActionType =
  | SetTourData
  | SetSelectedTourData
  | SetTourLocation;
