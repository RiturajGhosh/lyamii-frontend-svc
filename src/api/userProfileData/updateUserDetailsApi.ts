import { updateUserDetails } from "./updateUserDetails";

export async function updateUserDetailsApi(props: any) {
  try {
    return await updateUserDetails(props);
  } catch (error: any) {
    return error;
  }
}
