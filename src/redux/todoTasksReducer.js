import {
    INPUT_TASK_TEXT,
    CREATE_TASK,
    EDIT_TASK,
    UPDATE_TASK,
    DELETE_TASK,
    TOGGLE_TASK,
    ADD_DRAFT_TASK_TEXT,
    EDIT_DRAFT_TASK_TEXT,
    SHOW_COMPLETED_TASKS,
    SHOW_UNCOMPLETED_TASKS,
    SHOW_ALL_TASKS,
    DELETE_COMPLETED_TASKS,
    DELETE_ALL_TASKS
} from "./types";

const initialState = {
    taskText: '',
    tasksQueue: [],
    completed: false,
    editing: false,
    draftTaskText: '',

    statusFilter: 'all'
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
                tasksQueue: state.tasksQueue.map(task => task.id === action.id ? { ...task, editing: !task.editing } : task)
            }
        case UPDATE_TASK:
            return {
                ...state,
                tasksQueue: state.tasksQueue.map(task => task.id === action.task.id ? { ...task, taskText: action.task.text } : task)
            }
        case DELETE_TASK:
            return {
                ...state,
                tasksQueue: state.tasksQueue.filter(task => task.id !== action.id)
            }
        case TOGGLE_TASK:
            return {
                ...state,
                tasksQueue: state.tasksQueue.map(task => task.id === action.id ? { ...task, completed: !task.completed } : task)
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
        case SHOW_COMPLETED_TASKS:
            return {
                ...state,
                statusFilter: action.status
            }
        case SHOW_UNCOMPLETED_TASKS:
            return {
                ...state,
                statusFilter: action.status
            }
        case SHOW_ALL_TASKS:
            return {
                ...state,
                statusFilter: action.status
            }
        case DELETE_COMPLETED_TASKS:
            return {
                ...state,
                tasksQueue: state.tasksQueue.slice(0).filter(task => !task.completed)
            }
        case DELETE_ALL_TASKS:
            return {
                ...state,
                tasksQueue: []
            }
        default:
            return state;
    }
}