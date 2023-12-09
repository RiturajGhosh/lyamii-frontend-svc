import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function signUp(email: string) {
  return restClient({
    type: axiosType.post,
    url: "/v1/authenticate/verify/otp",
    payload: { email },
  });
}
