import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function signUp(props: any) {
  return restClient({
    type: axiosType.post,
    url: "/v1/authenticate/signup",
    payload: {
      username: props.username,
      email: props.email,
      role: [props.role],
      password: props.password,
    },
  });
}
