import { restClient } from "../restClient";
import { axiosType } from "../../components/common/enum/enum";

export async function getUserItinerary(email: string) {
  return restClient({
    type: axiosType.get,
    url: "/v1/user/itinerary",
    params: {
      email,
    },
  });
}
