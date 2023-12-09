import { combineReducers } from "redux";
import globeDataReducer from "./globeDataReducer";
import screenSizeReducer from "./screenSizeReducer";
import tourDataReducer from "./tourDataReducer";
import routeLocationReducer from "./routeLocationReducer";
import loginDataReducer from "./loginDataReducer";

const reducers = combineReducers({
  globeData: globeDataReducer,
  screenSize: screenSizeReducer,
  tourData: tourDataReducer,
  routeLocation: routeLocationReducer,
  loginData: loginDataReducer
});

const rootReducer = (state:any, action:any)=>{
  if(action.type === 'LOGOUT') { 
    state=undefined
  }
  return reducers(state,action);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;