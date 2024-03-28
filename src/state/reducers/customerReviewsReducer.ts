import { reviews } from "../../components/common/enum/enum";
import {
  SET_CUSTOMER_REVIEW,
  customerReviewActionType,
} from "../actions/types/customerReviewType";

export interface customerReviewState {
  customerReviews: any;
}
const initialState: customerReviewState = {
  customerReviews: reviews,
};

export default function customerReviewsReducer(
  state = initialState,
  action: customerReviewActionType
): customerReviewState {
  switch (action.type) {
    case SET_CUSTOMER_REVIEW:
      return {
        ...state,
        customerReviews: { ...action.payload },
      };

    default:
      return state;
  }
}
