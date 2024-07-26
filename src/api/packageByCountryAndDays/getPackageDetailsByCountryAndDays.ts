import { restClient } from "../restClient";
import { axiosType } from "../../components/common/enum/enum";

export async function getPackageDetailsByCountryAndDays(
  noOfDays: number | undefined,
  countryId: number | undefined
) {
  const params: any = {};
  if (noOfDays !== 0) {
    params["noOfDays"] = noOfDays;
  }
  if (countryId !== 0) {
    params["countryId"] = countryId;
  }
  return restClient({
    type: axiosType.get,
    url: "v1/common/package",
    params,
  });
}
