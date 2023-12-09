import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function getToursData(payload:any) {
  return restClient({
    type: axiosType.post,
    url: "/",
    payload: payload,
    // params: '',
  });
}
