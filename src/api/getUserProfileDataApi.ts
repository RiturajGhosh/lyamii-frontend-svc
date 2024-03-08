import { getUserProfileData } from "./getUserProfileData";

export async function getUserProfileDataApi(email: string) {
  try {
    return await getUserProfileData(email);
  } catch (error: any) {
    return error;
  }
}
