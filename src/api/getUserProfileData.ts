import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function getUserProfileData(email: string) {
  return restClient({
    type: axiosType.post,
    url: "/user/getuserprofile",
    params: {
      email,
    },
  });
}
