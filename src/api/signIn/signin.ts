import { axiosType } from "../../components/common/enum/enum";
import { restClient } from "../restClient";

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
