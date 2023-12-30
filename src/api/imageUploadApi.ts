import { imageUpload } from "./imageUpload";

export async function imageUploadApi(props: any) {
  try {
    return await imageUpload(props);
  } catch (error: any) {
    return error;
  }
}
