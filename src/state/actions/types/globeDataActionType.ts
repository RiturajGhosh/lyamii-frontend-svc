export const SET_GLOBE_DATA = "SET_GLOBE_DATA";
export const SET_SELECTED_LOCATION = "SET_SELECTED_LOCATION";

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

export type globeDataActionType = SetGlobeDataI | SetSelectedLocation;
