import { combineReducers } from "redux";


const reducers = combineReducers({

});

const rootReducer = (state:any, action:any)=>{
  if(action.type === 'LOGOUT') { 
    state=undefined
  }
  return reducers(state,action);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;