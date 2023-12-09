import {
  LoginDataDto,
  SET_LOGIN_DATA,
  loginDataActionType,
} from "../actions/types/loginDataActionType";

export interface loginDataState {
  loginData: LoginDataDto;
}
const initialState: loginDataState = {
  loginData: {
    userId: "",
    password: "",
  },
};

export default function loginDataReducer(
  state = initialState,
  action: loginDataActionType
): loginDataState {
  switch (action.type) {
    case SET_LOGIN_DATA:
      return {
        ...state,
        loginData: { ...action.payload },
      };

    default:
      return state;
  }
}
