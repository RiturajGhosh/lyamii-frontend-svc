import { restClient } from "../restClient";
import { axiosType } from "../../components/common/enum/enum";

export async function getNonIndianTours() {
  return restClient({
    type: axiosType.get,
    url: "/v1/common/package/non_indian",
    params: {},
  });
}
