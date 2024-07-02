export const SET_USER_DATA = "SET_USER_DATA";
export const SET_USER_PREFENCE = "SET_USER_PREFENCE";
export const SET_USER_PRIVACY = "SET_USER_PRIVACY";

export interface UserDataDto {
  address: AddressDataDto;
  email: string;
  phoneNumber: string;
  userFirstName: string;
  userLastName: string;
  birthDate: string;
  gender: string;
  bloodGroup: string;
}
export interface UserResponseDataDto {
  userProfileAddressResponse: AddressDataDto;
  email: string;
  phoneNumber: string;
  userFirstName: string;
  userLastName: string;
  birthDate: string;
  gender: string;
  bloodGroup: string;
}
interface SetUserDataI {
  type: typeof SET_USER_DATA;
  payload: UserDataDto;
}
interface SetUserPrefenceI {
  type: typeof SET_USER_PREFENCE;
  payload: string[];
}
interface SetUserPrivacyI {
  type: typeof SET_USER_PRIVACY;
  payload: string;
}
interface AddressDataDto {
  houseNumber: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  policeStation: string;
  postOffice: string;
}
export type userDataActionType =
  | SetUserDataI
  | SetUserPrefenceI
  | SetUserPrivacyI;
