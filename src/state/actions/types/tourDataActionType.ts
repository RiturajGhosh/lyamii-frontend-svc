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
  tourName: string;
  highlights: string[];
  timeline: TimeLine[];
  tourPrice: string;
  tourId: string;
  tourDays: string;
  recommendedDate: RecommendedDate;
  topPhotos: any[];
  acceptsWalletCredit: boolean;
  priceInfo: PriceDisplayInfo;
  basicTourData: BasicTourData;
  description: string[];
}
export interface TimeLine {
  destination: "";
  description: string[];
}
export interface RecommendedDate {
  checkout: string;
  lengthOfStay: number;
  checkin: string;
}
export interface BasicTourData {
  id: number;
  photos: Photos;
  location: BasicTourLocation;
  starRating: StarRating;
}

export interface BasicTourLocation {
  address: string;
  city: string;
  countryCode: string;
}

export interface Photos {
  main: URL;
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
  value: number;
}
export interface PriceBeforeDiscount {
  currency: string;
  amount: string;
}
export interface PriceDiscount {
  itemType: string;
  description: string;
  name: string;
  productId: string;
  amount: string;
  currency: string;
}
export interface PriceDisplayInfo {
  priceBeforeDiscount: PriceBeforeDiscount;
  discounts: PriceDiscount[];
}

export interface Badge {
  identifier: string;
  tooltip: ChargesInfo;
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
