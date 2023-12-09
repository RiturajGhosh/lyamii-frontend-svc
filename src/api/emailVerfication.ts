import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function emailVerification(email: string) {
  return restClient({
    type: axiosType.post,
    url: "/v1/authenticate/verify/email",
    payload: { email },
  });
}
