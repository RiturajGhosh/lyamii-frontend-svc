import { getPackageDetailsByPackageId } from "./getPackageDetailsByPackageId";

export async function getPackageDetailsByPackageIdApi(packageId?: string) {
  try {
    return await getPackageDetailsByPackageId(packageId);
  } catch (error: any) {
    return error;
  }
}
