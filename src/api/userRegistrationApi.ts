import { userRegistration } from "./userRegistration";

export async function userRegistrationApi(props: any) {
  try {
    return await userRegistration(props);
  } catch (error: any) {
    return error;
  }
}
