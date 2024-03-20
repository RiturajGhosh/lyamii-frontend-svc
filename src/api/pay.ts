import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function pay(params: any) {
  return restClient({
    type: axiosType.post,
    url: "/v1/status/",
    params,
  });
}
