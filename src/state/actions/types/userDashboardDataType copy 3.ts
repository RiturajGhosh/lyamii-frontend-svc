export const SET_DASHBOARD_DATA = "SET_DASHBOARD_DATA";

export interface UserDashboardDto {
  userFirstName: string;
  userLastName: string;
  greeting: string;
  ongoingTourSingleDayBrief: OngoingTourSingleDayBriefDto;
}
export interface OngoingTourSingleDayBriefDto {
  dayNo: number;
  packageId: string;
  heading: string;
  shortDesc: string;
}
interface SetUserDashboardData {
  type: typeof SET_DASHBOARD_DATA;
  payload: UserDashboardDto;
}

export type userDashboardDataType = SetUserDashboardData;
