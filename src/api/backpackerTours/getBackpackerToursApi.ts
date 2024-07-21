import { parseTourDataArray } from "../../utils/parseTourData";
import { getBackpackerTours } from "./getBackpackerTours";

export async function getBackpackerToursApi() {

  try {
    return await getBackpackerTours();
  } catch (error: any) {
    return error;
  }
}
