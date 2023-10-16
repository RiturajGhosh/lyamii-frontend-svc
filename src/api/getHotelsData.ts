import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function getHotelsData(payload:any) {
  return restClient({
    type: axiosType.get,
    url: "/",
    payload: payload,
    // params: '',
  });
}
