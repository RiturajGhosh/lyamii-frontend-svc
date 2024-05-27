import { getOngoingToursBriefDetails } from "./getOngoingToursBriefDetails";

export async function getOngoingToursBriefDetailsApi(email: string) {
  try {
    return await getOngoingToursBriefDetails(email);
  } catch (error: any) {
    return error;
  }
}
