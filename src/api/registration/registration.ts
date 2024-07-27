import { restClient } from "../restClient";
import { axiosType } from "../../components/common/enum/enum";
import { RegistrationDetailDto } from "../../state/actions/types/registrationType";

export async function registration(props: RegistrationDetailDto) {
  return restClient({
    type: axiosType.post,
    url: "/stay/registration",
    payload: props,
  });
}
