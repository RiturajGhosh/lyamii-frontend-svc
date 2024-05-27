import { getUpcomingTours } from "./getUpcomingTours";

export async function getUpcomingToursApi(email: string) {
  try {
    return await getUpcomingTours(email);
  } catch (error: any) {
    return error;
  }
}
