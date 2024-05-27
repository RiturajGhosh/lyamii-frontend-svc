import { getUserDashBoardData } from "./getUserDashBoardData";

export async function getUserDashBoardDataApi(email: string) {
  try {
    return await getUserDashBoardData(email);
  } catch (error: any) {
    return error;
  }
}
