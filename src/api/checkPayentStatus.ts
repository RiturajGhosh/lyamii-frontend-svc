import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function checkPaymentStatus(payload: any) {
  return restClient({
    type: axiosType.get,
    url: "/api/pay",
    payload,
  });
}
