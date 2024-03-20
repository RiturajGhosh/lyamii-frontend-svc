import { pay } from "./pay";

export async function payApi(props: any) {
  try {
    return await pay(props);
  } catch (error: any) {
    return error;
  }
}
