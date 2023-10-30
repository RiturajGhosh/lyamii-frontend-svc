import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";
import markers from "../components/common/globe/markers";

export async function getData(page: number) {
  // return restClient({
  //   type: axiosType.get,
  //   url: "/",
  //   payload: page,
  //   // params: '',
  // });
  return markers.slice(page * 10, 10 * (page + 1));
}
