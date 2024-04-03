import { getPackageDetailsByEdition } from "./getPackageDetailsByEdition";

export async function getPackageDetailsByEditionApi() {
  try {
    return await getPackageDetailsByEdition();
  } catch (error: any) {
    return error;
  }
}
