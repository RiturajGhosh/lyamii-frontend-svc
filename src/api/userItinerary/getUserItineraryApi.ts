import { getUserItinerary } from "./getUserItinerary";

export async function getUserItineraryApi(email: string) {
  try {
    return await getUserItinerary(email);
  } catch (error: any) {
    return error;
  }
}
