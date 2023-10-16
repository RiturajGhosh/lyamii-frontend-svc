import { combineReducers } from "redux";
import globeDataReducer from "./globeDataReducer";
import screenSizeReducer from "./screenSizeReducer";


const reducers = combineReducers({
  globeData: globeDataReducer,
  screenSize: screenSizeReducer
});

const rootReducer = (state:any, action:any)=>{
  if(action.type === 'LOGOUT') { 
    state=undefined
  }
  return reducers(state,action);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;