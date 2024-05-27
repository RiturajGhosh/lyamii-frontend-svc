import { RootStore } from "../store";
import { UserDashboardDto } from "../actions/types/userDashboardDataType";

export const selectUserDashboardData = (state: RootStore): UserDashboardDto =>
  state.userDashboardData.userDashboardDetail;
