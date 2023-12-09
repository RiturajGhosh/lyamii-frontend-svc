import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function signIn(email: string, password: string) {
  return restClient({
    type: axiosType.post,
    url: "/v1/authenticate/verify/otp",
    payload: {
      email,
      password,
    },
  });
}
