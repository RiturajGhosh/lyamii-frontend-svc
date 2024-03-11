import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function getUserProfileData(emailId: string) {
  return restClient({
    type: axiosType.get,
    url: "/user/getuserprofile",
    params: {
      emailId,
    },
  });
}
