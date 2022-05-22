import { INPUT_TASK_TEXT, CREATE_TASK, UPDATE_TASK } from "./types";

const initialState = {
    taskText: '',
    tasksQueue: [],
    completed: false,
    editing: false

}
export const todoTasksReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case INPUT_TASK_TEXT:
            return {

                ...state,
                taskText: action.text
            }
        case CREATE_TASK:

            return {

                ...state,

                tasksQueue: [...state.tasksQueue, action.task]

            }
        case UPDATE_TASK:
            return{
                ...state,
                tasksQueue: state.tasksQueue.map( task => task.id === action.data.id ? {...task, taskText: action.data.text } : task )
            }

        default:
            return state;
    }

}