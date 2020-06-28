import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import products from "./products";

export const rootReducer = combineReducers({
  products,
  form: formReducer,
});
