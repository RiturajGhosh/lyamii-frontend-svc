import { SET_NAV_HIDDEN } from "../actions/types/sideNavType";

const initialState: any = {
  hidden: false,
};

export default function sideNavReducer(state = initialState, action: any): any {
  switch (action.type) {
    case SET_NAV_HIDDEN:
      return {
        ...state,
        hidden: action.payload,
      };

    default:
      return state;
  }
}
