import { restClient } from "./restClient";
import { axiosType } from "../components/common/enum/enum";

export async function imageUpload(files: string[]) {
  return restClient({
    type: axiosType.post,
    url: `/stay/uploadimage/${1}`,
    payload: files,
  });
}
