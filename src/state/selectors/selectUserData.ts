import { RootStore } from "../store";
import { userDataState } from "../reducers/userProfileDataReducer";
import { createSelector } from "@reduxjs/toolkit";

export const selectUserData = (state: RootStore): userDataState =>
  state.userData;

export const selectUserPrefence = createSelector(
  selectUserData,
  (statuses): string[] => statuses.prefence
);
export const selectUserPrivacy = createSelector(
  selectUserData,
  (statuses): string => statuses.privacy
);
