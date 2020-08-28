import { combineReducers } from "redux";
import counterReducer from "../redux/reducer";

export const rootReducers = combineReducers({
  count: counterReducer,
});
