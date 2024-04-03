import { getPackageDetailsByCountry } from "./getPackageDetailsByCountry";

export async function getPackageDetailsByCountryApi() {
  try {
    return await getPackageDetailsByCountry();
  } catch (error: any) {
    return error;
  }
}
