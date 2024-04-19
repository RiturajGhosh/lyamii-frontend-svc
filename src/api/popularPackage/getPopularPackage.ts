import { restClient } from "../restClient";
import { axiosType } from "../../components/common/enum/enum";

export async function getPopularPackage() {
  return restClient({
    type: axiosType.get,
    url: "/v1/common/package/popular",
    params: {},
  });
}
