import { restClient } from "../restClient";
import { axiosType } from "../../components/common/enum/enum";

export async function getComboTours() {
  return restClient({
    type: axiosType.get,
    url: "v1/common/package/tripType?tripType=0&countryId=1",
    params: {},
  });
}
