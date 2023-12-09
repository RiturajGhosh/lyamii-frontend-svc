export const SET_LOGIN_DATA = "SET_LOGIN_DATA";

export interface LoginDataDto {
  userId: string;
  password: string;
}
interface SetLoginDataI {
  type: typeof SET_LOGIN_DATA;
  payload: LoginDataDto;
}

export type loginDataActionType =
  | SetLoginDataI;
