import { getOtp } from "./otp";

export async function getOtpApi(emailId: string) {
  try {
    return await getOtp(emailId);
  } catch (error: any) {
    return error;
  }
}
