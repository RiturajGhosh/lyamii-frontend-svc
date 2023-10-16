export const SET_IS_MOBILE = "SET_IS_MOBILE";
export const SET_IS_DESKTOP = "SET_IS_DESKTOP";
export const SET_SCREENSIZE = 'SET_SCREENSIZE';

interface SetMobileScreenSize {
  type: typeof SET_IS_MOBILE;
}
interface SetDesktopScreenSize {
  type: typeof SET_IS_DESKTOP;
}
interface SetScreenSize {
  type: typeof SET_SCREENSIZE;
  payload: number;
}


export type globeDataActionType =
  | SetDesktopScreenSize
  | SetScreenSize
  | SetMobileScreenSize;
