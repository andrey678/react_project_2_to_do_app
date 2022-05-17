import { combineReducers } from "redux";
import { todoTaskReducer } from "./todoTasksReducer";
export const rootReducer = combineReducers({
    todoTaskReducer
});