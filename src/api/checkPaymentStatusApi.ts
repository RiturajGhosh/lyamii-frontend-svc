import { checkPaymentStatus } from "./checkPayentStatus";

export async function checkPaymentStatusApi(props: any) {
  try {
    return await checkPaymentStatus(props);
  } catch (error: any) {
    return error;
  }
}
