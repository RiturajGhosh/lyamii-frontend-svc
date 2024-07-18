import { restClient } from "../restClient";
import { axiosType } from "../../components/common/enum/enum";

export async function getPopularPackage() {
  console.log("Calling getPopularPackage API...");
  try {
    const response = await restClient({
      type: axiosType.get,
      url: "/v1/common/package/popular",
    });
    console.log("API response:", response);
    return response;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}
