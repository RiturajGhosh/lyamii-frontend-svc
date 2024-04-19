export const SET_SELECTED_TOUR_DATA = "SET_SELECTED_TOUR_DATA";
export const SET_TOUR_DATA = "SET_TOUR_DATA";
export const SET_TOUR_PACKAGE_ID = "SET_TOUR_PACKAGE_ID";
export const SET_TOUR_LOCATION = "SET_TOUR_LOCATION";
export const SET_POPULAR_PACKAGE = "SET_POPULAR_PACKAGE";

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
  flagCode: string;
  description: string;
  overview: string;
  highlights: string[];
  noOfDays: number;
  itinerary: Itinerary;
  includes: string[];
  destinations: string[];
  packagePrice: string[];
  rating: number;
  currencyLabel: string;
  tripType: string;
  country: string;
  imageUri: string[];
}
// export interface TimeLine {
//   Day1: string[];
//   Day2: string[];
//   Day3: string[];
//   Day4: string[];
//   Day5: string[];
//   Day6: string[];
//   Day7: string[];
// }
export interface Itinerary {
  "0": string;
  "1": string[];
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
export type tourDataActionType =
  | SetTourData
  | SetSelectedTourData
  | SetPopularPackageI
  | SetTourPackageId
  | SetTourLocation;
