import { parseTourDataArray } from "../../utils/parseTourData";
import { getPackageByDestination } from "./getPackageByDestination";

export async function getPackageByDestinationApi(destination: string) {
  try {
    return await getPackageByDestination(destination);
  } catch (error: any) {
    return error;
  }
}
