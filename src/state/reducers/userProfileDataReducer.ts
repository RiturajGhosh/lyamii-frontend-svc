import {
  SET_USER_DATA,
  UserDataDto,
  userDataActionType,
} from "../actions/types/userDataActionType";

export interface userDataState {
  userData: UserDataDto;
}
const initialState: userDataState = {
  userData: {
    address: {
      houseNumber: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
      policeStation:"",
      postOffice:""
    },
    email: "",
    phoneNumber: "",
    userFirstName: "",
    userLastName: "",
    dateOfBirth:"",
    gender: "",
    bloodGroup: "",
    country: "",
  },
};

export default function userProfileDataReducer(
  state = initialState,
  action: userDataActionType
): userDataState {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: { ...action.payload },
      };
    default:
      return state;
  }
}
