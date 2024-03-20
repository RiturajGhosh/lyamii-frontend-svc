export const SET_NAV_HIDDEN = "SET_NAV_HIDDEN";

interface SetSideNavDisplay {
  type: typeof SET_NAV_HIDDEN;
  payload: boolean;
}


export type sideNavActionType =
  | SetSideNavDisplay
