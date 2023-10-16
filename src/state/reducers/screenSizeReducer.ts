import {
  SET_IS_DESKTOP,
  SET_IS_MOBILE,
  SET_SCREENSIZE,
} from "../actions/types/screenSizeType";

const initialState: any = {
  isMobile: window.innerWidth < 1000,
  isDesktop: window.innerWidth > 1000,
  screenSize: window.innerWidth,
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
    case SET_SCREENSIZE:
      return {
        ...state,
        screenSize: action.payload,
      };
    default:
      return state;
  }
}
