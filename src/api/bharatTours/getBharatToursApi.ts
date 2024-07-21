import { parseTourDataArray } from "../../utils/parseTourData";
import { getBharatTours } from "./getBharatTours";

export async function getBharatToursApi() {
  try {
    return await getBharatTours();
  } catch (error: any) {
    return error;
  }
}
