import { getToursData } from "../../api/getToursData";

export async function getTours(payload: any) {
  try {
    const data = await getToursData(payload);
    
    return {};
  } catch (error) {
    return error;
  }
}
