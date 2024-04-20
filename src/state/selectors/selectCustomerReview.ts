import { RootStore } from "../store";
import { customerReviewState } from "../reducers/customerReviewsReducer";

export const selectCustomerReview = (state: RootStore): customerReviewState =>
  state.customerReview;
