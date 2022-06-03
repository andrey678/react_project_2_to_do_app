import { combineReducers } from "redux";
import { todoTasksReducer } from "./todoTasksReducer";


export const rootReducer = combineReducers({
    todoTasksReducer
});