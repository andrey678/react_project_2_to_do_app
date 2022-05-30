import { useDispatch, useSelector } from "react-redux";

import './Task.scss';
import { updateTask, editTask, addDraftTaskText, editDraftTaskText, deleteTask } from '../redux/actions';
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

        dispatch(updateTask(data.id.value, data.text.value));
        dispatch(editTask(id));
    };
    // Вход в режим редактирования (изменение состояния поля editing у задания)
    const handleClickEdit = () => dispatch(editTask(id));
    // Редактирование задания (изменение состояния поля draftText)
    const handleDraftTaskTextChange = event => dispatch(editDraftTaskText(event.target.value));
    // Удаление задания
    const handleDelete = () => dispatch(deleteTask(id));
    return (
        <div className="task">
            <form
                onSubmit={handleUpdate}
                className='task__form'
                name="task"
            >
                <div className="task__block">
                    <lable className="task__label">
                        <input type="checkbox" />
                        <TaskInput
                            data={props.data}
                            // tempText={tempText}
                            handleChange={handleDraftTaskTextChange}
                        />
                        <button onClick={handleClickEdit} type="button">Редактировать</button>
                        <button onClick={handleDelete} type="button">Удалить</button>
                    </lable>

                    <input type="submit" hidden />
                </div>
            </form>
        </div>

    );
}

export default Task;