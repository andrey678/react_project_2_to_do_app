import { INPUT_TASK_TEXT, CREATE_TASK } from "./types";

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

