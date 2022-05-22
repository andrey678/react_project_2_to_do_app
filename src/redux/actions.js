import { INPUT_TASK_TEXT, CREATE_TASK, UPDATE_TASK } from "./types";

export function inputTaskText(text) {
    return {
        type: INPUT_TASK_TEXT,
        text
    }
}

export function createTask(id, text) {
    return {
        type: CREATE_TASK,
        task: {id, text}
    }
}

export function updateTask(id, text){
    return{
        type: UPDATE_TASK,
        task: { id, text }
    }
}