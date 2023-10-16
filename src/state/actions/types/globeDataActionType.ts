export const SET_GLOBE_DATA = "SET_GLOBE_DATA";
export const SET_SELECTED_LOCATION = "SET_SELECTED_LOCATION";
export const SET_HOTELS = "SET_HOTELS";

export interface GlobeDataDto {
  id: string;
  city: string;
  color: string;
  coordinates: number[];
  value: number;
}
interface SetGlobeDataI {
  type: typeof SET_GLOBE_DATA;
  payload: GlobeDataDto;
}
interface SetSelectedLocation {
  type: typeof SET_SELECTED_LOCATION;
  payload: GlobeDataDto;
}
interface SetHotels {
  type: typeof SET_HOTELS;
  payload: any;
}
export type globeDataActionType =
  | SetGlobeDataI
  | SetSelectedLocation
  | SetHotels;
