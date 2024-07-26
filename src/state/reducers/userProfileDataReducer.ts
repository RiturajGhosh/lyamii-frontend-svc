import {
  SET_USER_DATA,
  SET_USER_PREFENCE,
  SET_USER_PRIVACY,
  UserDataDto,
  userDataActionType,
} from "../actions/types/userDataActionType";

export interface userDataState {
  userData: UserDataDto;
  prefence: string[];
  privacy: string;
}
const initialState: userDataState = {
  userData: {
    address: {
      houseNumber: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
      policeStation: "",
      postOffice: "",
    },
    email: "",
    phoneNumber: "",
    userFirstName: "",
    userLastName: "",
    userFullName: "",
    birthDate: "",
    gender: "",
    bloodGroup: "",
  },
  prefence: [],
  privacy: "",
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
    case SET_USER_PREFENCE:
      return {
        ...state,
        prefence: [...action.payload],
      };
    case SET_USER_PRIVACY:
      return {
        ...state,
        privacy: action.payload,
      };
    default:
      return state;
  }
}
