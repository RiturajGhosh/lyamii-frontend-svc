export const SET_LOGIN_DATA = "SET_LOGIN_DATA";
export const OTP_VERIFICATION = "OTP_VERIFICATION";

export interface LoginDataDto {
  email: string;
  password: string;
  id: number;
  token: string;
  role: string[];
}
export interface LoginVerifyDto {
  status: boolean;
}
interface SetVerificationI {
  type: typeof OTP_VERIFICATION;
  payload: LoginVerifyDto;
}

interface SetLoginDataI {
  type: typeof SET_LOGIN_DATA;
  payload: LoginDataDto;
}

export type loginDataActionType = SetLoginDataI | SetVerificationI;
