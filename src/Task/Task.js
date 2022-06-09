import './Task.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from "react-redux";


import { updateTask, editTask, addDraftTaskText, editDraftTaskText, deleteTask, toggleTask } from '../redux/actions';
import TaskInput from "../TaskInput/TaskInput";


function Task(props) {
    // let tempText = useSelector(state => state.todoTasksReducer.draftTaskText);
    let { id, text, completed, editing } = props.data;
    // console.log('temptext ', tempText);

    // console.log('task props', props);
    const dispatch = useDispatch();
    // dispatch(addDraftTaskText(props.data.text));
    console.log('task props', props);
    const handleUpdate = (event) => {
        event.preventDefault();
        console.log('TASK FORM', event.target.elements);
        let data = event.target.elements;

        dispatch(updateTask(data.id.value, data.text.value.trim()));
        dispatch(editTask(id));
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
                    let data = area.form.elements;
                    dispatch(updateTask(data.id.value, data.text.value.trim()));
                    dispatch(editTask(id));
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
                                data={props.data}
                                // tempText={tempText}
                                handleChange={handleDraftTaskTextChange}
                                update={handleUpdate}
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

                    <input type="submit" hidden />
                </div>
            </form>
        </div>

    );
}

export default Task;