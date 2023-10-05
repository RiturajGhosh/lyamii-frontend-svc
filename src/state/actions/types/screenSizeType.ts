export const SET_IS_MOBILE = "SET_IS_MOBILE";
export const SET_IS_DESKTOP = "SET_IS_DESKTOP";

interface SetMobileScreenSize {
  type: typeof SET_IS_MOBILE;
}
interface SetDesktopScreenSize {
  type: typeof SET_IS_DESKTOP;
}

export type globeDataActionType =
  | SetDesktopScreenSize
  | SetMobileScreenSize;
