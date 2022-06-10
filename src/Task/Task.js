// Стили
import './Task.scss';
// Иконки FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

// Хуки React-Redux
import { useDispatch } from "react-redux";

// Action creators
import {
    updateTask,
    editTask,
    editDraftTaskText,
    deleteTask,
    toggleTask
} from '../redux/actions';

// Компоненты
import TaskInput from "../TaskInput/TaskInput";


function Task({ taskData }) {

    let { id, completed } = taskData;

    const dispatch = useDispatch();

    // Сохранение изменений в задании и выход из режима редактирования
    const handleUpdate = (event) => {
        event.preventDefault();
        let editedTaskForm = event.target.elements;
        if(editedTaskForm.text.value.trim()){
            dispatch(updateTask(editedTaskForm.id.value, editedTaskForm.text.value.trim()));
            dispatch(editTask(id));
        }
    };
    // Вход в режим редактирования (изменение состояния поля editing у задания)
    const handleClickEdit = () => dispatch(editTask(id));

    // Редактирование задания (изменение состояния поля draftText)
    const handleDraftTaskTextChange = event => {
        dispatch(editDraftTaskText(event.target.value));

        let areas = document.getElementsByName('text');

        for (let area of areas) {

            // После редактирования задания, при нажатии Enter, вместо перехода на новую строку
            // происходит сохранение изменений. 
            area.onkeydown = (event) => {
                if (event.key === 'Enter' || event.key === 'NumpadEnter') {
                    let modifiedTask = area.form.elements;
                    if(modifiedTask.text.value.trim()){
                        dispatch(updateTask(modifiedTask.id.value, modifiedTask.text.value.trim()));
                        dispatch(editTask(id));
                    }
                    return false;
                }
            }

            // Увеличение высоты текста в зависимости от набираемого текста в процессе
            area.onkeyup = (event) => {
                area.style.height = "auto";
                let scHeight = event.target.scrollHeight;
                area.style.height = `${scHeight}px`;
            }
        }
    }

    // Удаление задания
    const handleDelete = () => dispatch(deleteTask(id));
    // Переключение состояния input
    const toggleInput = () => dispatch(toggleTask(id));


    return (
        <div className="task">
            <form
                onSubmit={handleUpdate}
                className='task__form'
                name="task"
            >
                <div className="task__block">
                    <div className="task__main">
                        <lable className="task__label" htmlFor={id}>
                            <input onChange={toggleInput}
                                checked={completed}
                                className="task__check-input"
                                type="checkbox"
                                id={id}
                            />
                            <TaskInput
                                taskInputData={taskData}
                                handleChange={handleDraftTaskTextChange}
                            />
                        </lable>
                    </div>

                    <div className="task__control">
                        <button
                            onClick={handleClickEdit}
                            className="task__control-btn task__control-btn_edit"
                            type="button"
                        >
                            <FontAwesomeIcon icon={faPenToSquare} /> Edit
                        </button>
                        <button
                            onClick={handleDelete}
                            className="task__control-btn task__control-btn_delete"
                            type="button"
                        >
                            <FontAwesomeIcon icon={faCircleXmark} /> Delete</button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default Task;