import { combineReducers } from "redux";
import visibilityFilter from "./vissibleFiltrers";
import todos from "./todos";


export default combineReducers({ todos , visibilityFilter });
