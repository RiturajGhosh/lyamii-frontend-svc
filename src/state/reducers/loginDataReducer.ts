import {
  LoginDataDto,
  LoginVerifyDto,
  OTP_VERIFICATION,
  SET_LOGIN_DATA,
  loginDataActionType,
} from "../actions/types/loginDataActionType";

export interface loginDataState {
  loginData: LoginDataDto;
  verify: LoginVerifyDto;
}
const initialState: loginDataState = {
  loginData: {
    userId: "",
    password: "",
  },
  verify: {
    status: false,
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
    case OTP_VERIFICATION:
      return {
        ...state,
        verify: { ...action.payload },
      };

    default:
      return state;
  }
}
