import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function getPackageDetailsByCountryAndDays(noOfDays:number, countryId:number) {
  return restClient({
    type: axiosType.get,
    url: "v1/common/package",
    params: { noOfDays, countryId },
  });
}
