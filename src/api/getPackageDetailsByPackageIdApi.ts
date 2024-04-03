import { getPackageDetailsByPackageId } from "./getPackageDetailsByPackageId";

export async function getPackageDetailsByPackageIdApi() {
  try {
    return await getPackageDetailsByPackageId();
  } catch (error: any) {
    return error;
  }
}
