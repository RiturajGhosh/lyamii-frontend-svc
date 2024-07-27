import { restClient } from "../restClient";
import { axiosType } from "../../components/common/enum/enum";

export async function refresh(props: any) {
  return restClient({
    type: axiosType.post,
    url: "/v1/authenticate/refresh",
    payload: props,
  });
}
