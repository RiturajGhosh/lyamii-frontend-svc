import { restClient } from "../restClient";
import { axiosType } from "../../components/common/enum/enum";

export async function getBackpackerTours() {
  return restClient({
    type: axiosType.get,
    url: "v1/common/package/tripType?tripType=2&countryId=1",
    params: {},
  });
}
