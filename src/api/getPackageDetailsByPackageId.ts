import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function getPackageDetailsByPackageId() {
  return restClient({
    type: axiosType.get,
    url: "/v1/common/package/RIE07",
    params: {},
  });
}
