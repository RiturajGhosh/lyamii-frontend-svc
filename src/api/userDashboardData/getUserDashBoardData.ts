import { restClient } from "../restClient";
import { axiosType } from "../../components/common/enum/enum";

export async function getUserDashBoardData(email: string) {
  return restClient({
    type: axiosType.get,
    url: "/v1/user/dashboard",
    params: {
      email,
    },
  });
}
