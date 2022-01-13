import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer, //key, value
});

export default reducers;

export type RootState = ReturnType<typeof reducers>; //return type of store
