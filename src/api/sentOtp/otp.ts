import { restClient } from "../restClient";
import { axiosType } from "../../components/common/enum/enum";

export async function getOtp(emailId: string) {
  return restClient({
    type: axiosType.post,
    url: "/v1/authenticate/verify/email",
    params: {
      emailId,
    },
  });
}
