import { SET_IS_DESKTOP, SET_IS_MOBILE } from "../actions/types/screenSizeType";

const initialState: any = {
  isMobile: false,
  isDesktop: false,
};

export default function screenSizeReducer(
  state = initialState,
  action: any
): any {
  switch (action.type) {
    case SET_IS_MOBILE:
      return {
        ...state,
        isMobile: true,
        isDesktop: false,
      };
    case SET_IS_DESKTOP:
      return {
        ...state,
        isMobile: false,
        isDesktop: true,
      };
    default:
      return state;
  }
}
