import {
    INPUT_TASK_TEXT,
    CREATE_TASK,
    EDIT_TASK,
    UPDATE_TASK,
    DELETE_TASK,
    ADD_DRAFT_TASK_TEXT,
    EDIT_DRAFT_TASK_TEXT
} from "./types";

const initialState = {
    taskText: '',
    tasksQueue: [],
    completed: false,
    editing: false,
    draftTaskText: ''

}
export const todoTasksReducer = (state = initialState, action) => {
    console.log('task reducer', state);
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
        case EDIT_TASK:
            return {
                ...state,
                tasksQueue: state.tasksQueue.map(task => task.id === action.task.id ? { ...task, editing: !task.editing } : task)
            }
        case UPDATE_TASK:
            return {
                ...state,
                tasksQueue: state.tasksQueue.map(task => task.id === action.task.id ? { ...task, taskText: action.task.text } : task)
            }
        case DELETE_TASK:
            return {
                ...state,
                tasksQueue: state.tasksQueue.filter(task => task.id !== action.task.id)
            }
        case ADD_DRAFT_TASK_TEXT:
            return {
                ...state,
                draftTaskText: action.text
            }
        case EDIT_DRAFT_TASK_TEXT:
            return {
                ...state,
                draftTaskText: action.text
            }
        default:
            return state;
    }

}