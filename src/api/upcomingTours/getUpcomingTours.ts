import { restClient } from "../restClient";
import { axiosType } from "../../components/common/enum/enum";

export async function getUpcomingTours(email: string) {
  return restClient({
    type: axiosType.get,
    url: "/v1/user/tours/upcoming",
    params: {
      email,
    },
  });
}
