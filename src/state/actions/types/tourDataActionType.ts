export const SET_SELECTED_TOUR_DATA = "SET_SELECTED_TOUR_DATA";
export const SET_TOUR_DATA = "SET_TOUR_DATA";
export const SET_TOUR_PACKAGE_ID = "SET_TOUR_PACKAGE_ID";
export const SET_TOUR_LOCATION = "SET_TOUR_LOCATION";
export const SET_POPULAR_PACKAGE = "SET_POPULAR_PACKAGE";
export const SET_NON_INDIAN_TOURS = "SET_NON_INDIAN_TOURS";

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
  packageId: string;
  packageName: string;
  title: string;
  description: string[];
  overview: string;
  highlights: string[];
  noOfDays: number;
  itinerary: string[][];
  includes: string[];
  destinations: string[];
  packagePrice: string[];
  rating: number;
  currencyLabel: any;
  tripType: string;
  country: string;
  imageUri: string[];
}

interface SetSelectedTourData {
  type: typeof SET_SELECTED_TOUR_DATA;
  payload: selectedTourDataDto;
}
interface SetTourData {
  type: typeof SET_TOUR_DATA;
  payload: selectedTourDataDto[];
}
interface SetPopularPackageI {
  type: typeof SET_POPULAR_PACKAGE;
  payload: selectedTourDataDto[];
}
interface SetTourPackageId {
  type: typeof SET_TOUR_PACKAGE_ID;
  payload: string;
}
interface SetNonIndianTours {
  type: typeof SET_NON_INDIAN_TOURS;
  payload: selectedTourDataDto[];
}
export type tourDataActionType =
  | SetTourData
  | SetSelectedTourData
  | SetPopularPackageI
  | SetTourPackageId
  | SetTourLocation
  | SetNonIndianTours;
