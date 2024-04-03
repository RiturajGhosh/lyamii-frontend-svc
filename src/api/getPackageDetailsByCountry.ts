import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function getPackageDetailsByCountry() {
  return restClient({
    type: axiosType.get,
    url: "/v1/common/package/country/1",
    params: {},
  });
}
