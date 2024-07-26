import { restClient } from "../restClient";
import { axiosType } from "../../components/common/enum/enum";

export async function otpVerification(emailId: string, otp: string) {
  return restClient({
    type: axiosType.post,
    url: "/v1/authenticate/verify/otp",
    payload: { emailId, otp: parseInt(otp) },
  });
}
