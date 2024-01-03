import { otpVerification } from "./otpVerfication";

export async function otpVerificationApi(emailId: string, otp: string) {
  try {
    return await otpVerification(emailId, otp);
  } catch (error: any) {
    return error;
  }
}
