import { selectedTourDataDto } from "./tourDataActionType";

export const SET_UPCOMING_TOURS = "SET_UPCOMING_TOURS";

export interface UpcomingToursDto {
  packageId: string;
  prfDepatureDate: string;
  packageDetailsResponse: any;
  paymentDetail: any;
}

interface SetUpcomingToursData {
  type: typeof SET_UPCOMING_TOURS;
  payload: UpcomingToursDto;
}

export type upcomingToursDataType = SetUpcomingToursData;
