import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function getPackageDetailsByEdition() {
  return restClient({
    type: axiosType.get,
    url: "/v1/common/package/edition/1",
    params: {},
  });
}
