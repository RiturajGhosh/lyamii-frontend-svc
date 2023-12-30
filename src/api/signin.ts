import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function signIn(props: any) {
  return restClient({
    type: axiosType.post,
    url: "/v1/authenticate/signin",
    payload: {
      email: props.email,
      password: props.password,
    },
  });
}
