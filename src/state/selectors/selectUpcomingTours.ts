import { RootStore } from "../store";
import { upcomingToursState } from "../reducers/upcomingToursReducer";

export const selectUpcomingTours = (state: RootStore): upcomingToursState =>
  state.upcomingTours;
