import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { rootReducers } from "./rootReducer";

export const store = createStore(rootReducers, applyMiddleware());
