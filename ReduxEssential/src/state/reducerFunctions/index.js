import { combineReducers } from "redux";
import countStateReducer from "./countStateReducer";

//Storing/wrapping all the reducer functions of the app in this single function
const reducerFunctions = combineReducers({
  //manageCOuntState is just the name of the function and it can be any name
  // But make sure the code where youu are trying to update the state ,you are bound to use correct name of the reducer function in this case it is : manageCountState
  manageCountState: countStateReducer,
});
export default reducerFunctions;
