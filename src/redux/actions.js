import {
    INPUT_TASK_TEXT,
    CREATE_TASK, EDIT_TASK,
    UPDATE_TASK,
    ADD_DRAFT_TASK_TEXT,
    EDIT_DRAFT_TASK_TEXT
} from "./types";

export function inputTaskText(text) {
    return {
        type: INPUT_TASK_TEXT,
        text
    }
}

export function createTask(id, taskText, completed, editing) {
    return {
        type: CREATE_TASK,
        task: { id, taskText, completed, editing }
    }
}
export function editTask(id) {
    return {
        type: EDIT_TASK,
        task: { id }
    }
}

export function updateTask(id, text) {
    return {
        type: UPDATE_TASK,
        task: { id, text }
    }
}

export function addDraftTaskText(text) {
    return {
        type: ADD_DRAFT_TASK_TEXT,
        text
    }
}
export function editDraftTaskText(text) {
    return {
        type: EDIT_DRAFT_TASK_TEXT,
        text
    }
}