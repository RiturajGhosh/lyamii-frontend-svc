export const SET_LOCATION = 'SET_LOCATION';

export interface locationDto {
  location: string;
}
interface SetLocationI {
  type: typeof SET_LOCATION;
  payload: locationDto;
}

export type locationActionType =
  | SetLocationI;
