import { getUserProfileData } from "./getUserProfileData";

export async function getUserProfileDataApi(emailId: string) {
  try {
    return await getUserProfileData(emailId);
  } catch (error: any) {
    return error;
  }
}
