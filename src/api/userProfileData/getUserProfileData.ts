import { restClient } from "../restClient";
import { axiosType } from "../../components/common/enum/enum";

export async function getUserProfileData(email: string) {
  return restClient({
    type: axiosType.get,
    url: "/v1/user/business-details",
    params: {
      email,
    },
  });
}
