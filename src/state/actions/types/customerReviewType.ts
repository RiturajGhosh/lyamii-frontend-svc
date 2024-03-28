export const SET_CUSTOMER_REVIEW = "SET_CUSTOMER_REVIEW";

export interface CustomerReviewDto {
  id: string;
  city: string;
  color: string;
  coordinates: number[];
  value: number;
}
interface SetCustomerReviewI {
  type: typeof SET_CUSTOMER_REVIEW;
  payload: CustomerReviewDto;
}

export type customerReviewActionType =
  | SetCustomerReviewI;
