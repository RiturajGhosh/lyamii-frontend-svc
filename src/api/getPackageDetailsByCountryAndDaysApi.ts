import { parseTourDataArray } from "../utils/parseTourData";
import { getPackageDetailsByCountryAndDays } from "./getPackageDetailsByCountryAndDays";

export async function getPackageDetailsByCountryAndDaysApi(
  noOfDays: number,
  countryId: number
) {
  try {
    return await getPackageDetailsByCountryAndDays(noOfDays, countryId);
  } catch (error: any) {
    return error;
  }
}
