import { RootStore } from "../store";
import { loginDataState } from "../reducers/loginDataReducer";
import { createSelector } from "@reduxjs/toolkit";

export const selectLoginData = (state: RootStore): loginDataState =>
  state.loginData;

export const selectOtpVerification = createSelector(
  selectLoginData,
  (statuses) => statuses.verify
);
