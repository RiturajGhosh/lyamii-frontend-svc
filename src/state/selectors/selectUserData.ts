import { RootStore } from "../store";
import { userDataState } from "../reducers/userProfileDataReducer";

export const selectUserData = (state: RootStore): userDataState =>
  state.userData;
