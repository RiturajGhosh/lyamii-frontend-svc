export const SET_USER_DATA = "SET_USER_DATA";

export interface UserDataDto {
  address: AddressDataDto;
  email: string;
  phoneNumber: string;
  userFirstName: string;
  userLastName: string;
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  country: string;
}
interface SetUserDataI {
  type: typeof SET_USER_DATA;
  payload: UserDataDto;
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
export type userDataActionType = SetUserDataI;
