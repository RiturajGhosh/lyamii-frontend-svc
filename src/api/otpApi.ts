import { getOtp } from "./otp";

export async function getOtpApi(emailId: string) {
  try {
    await getOtp(emailId);
  } catch (error: any) {
    return error;
  }
}
