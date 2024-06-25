import { restClient } from "../restClient";
import { axiosType } from "../../components/common/enum/enum";

export async function getPackageByDestination(destination: string) {
  return restClient({
    type: axiosType.get,
    url: "/v1/common/package/destination",
    params: { destination },
  });
}
