import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function getGlobedata() {
  return restClient({
    type: axiosType.get,
    url: "/",
    payload: {},
    params: {},
  });
}
