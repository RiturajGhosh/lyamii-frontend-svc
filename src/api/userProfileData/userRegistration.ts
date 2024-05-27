import { restClient } from "../restClient";
import { axiosType } from "../../components/common/enum/enum";
import { UserDataDto } from "../../state/actions/types/userDataActionType";

export async function userRegistration(props: UserDataDto) {
  return restClient({
    type: axiosType.post,
    url: "/v1/user/business-details/add",
    payload: props,
  });
}
