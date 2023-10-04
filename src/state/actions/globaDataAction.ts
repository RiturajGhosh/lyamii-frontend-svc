import { Dispatch } from "redux";
import { getGlobedata } from "../../api/getGlobedata";
import {
  SET_GLOBE_DATA,
  globeDataActionType,
} from "./types/globeDataActionType";

export const getGlobeFullData =
  () => async (dispatch: Dispatch<globeDataActionType>) => {
    try {
      const { data } = await getGlobedata();
      dispatch({
        type: SET_GLOBE_DATA,
        payload: data,
      });
    } catch (error) {
      return error;
    }
  };
