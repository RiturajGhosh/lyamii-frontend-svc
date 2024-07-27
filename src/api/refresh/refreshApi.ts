import { refresh } from "./refresh";

export async function refreshApi(props: any) {
  try {
    return await refresh(props);
  } catch (error: any) {
    return error;
  }
}
