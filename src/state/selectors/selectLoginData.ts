import { RootStore } from "../store";
import { loginDataState } from "../reducers/loginDataReducer";

export const selectLoginData = (state: RootStore): loginDataState =>
  state.loginData;
