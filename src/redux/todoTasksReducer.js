import { INPUT_TASK_TEXT, CREATE_TASK } from "./types";

const initialState = {
    taskText: '',
    tasksQueue: []
}
export const todoTaskReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case INPUT_TASK_TEXT:
            return {
                
                ...state,
                taskText: action.text
            }
        case CREATE_TASK:
            return {
                
                // ...state,
                tasksQueue: [...state.tasksQueue, action.task]
                
            }
        default:
            return state;
    }
    
}