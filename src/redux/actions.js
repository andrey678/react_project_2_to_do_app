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
        id
    }
}

export function updateTask(id, text) {
    return {
        type: UPDATE_TASK,
        task: { id, text }
    }
}
export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        id
    }
}
export function toggleTask(id) {
    return {
        type: TOGGLE_TASK,
        id
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

export function showCompletedTasks(status) {
    return {
        type: SHOW_COMPLETED_TASKS,
        status
    }
}
export function showUncompletedTasks(status) {
    return {
        type: SHOW_UNCOMPLETED_TASKS,
        status
    }
}
export function showAllTasks(status) {
    return {
        type: SHOW_ALL_TASKS,
        status
    }
}
export function deleteCompletedTasks() {
    return {
        type: DELETE_COMPLETED_TASKS
    }
}
export function deleteAllTasks() {
    return {
        type: DELETE_ALL_TASKS
    }
}