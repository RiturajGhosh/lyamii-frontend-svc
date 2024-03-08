import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function userRegistration(props: any) {
  return restClient({
    type: axiosType.post,
    url: "/user/registration",
    payload: props,
  });
}
