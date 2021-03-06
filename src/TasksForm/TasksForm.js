// Стили
import './TasksForm.scss';

// Хуки React Redux
import { useSelector, useDispatch } from 'react-redux';

// Action creators
import { createTask, inputTaskText } from '../redux/actions';


function TasksForm() {

    // Получение состояния из Redux
    const { taskText, completed, editing } = useSelector(state => state.todoTasksReducer);

    // Отправка действий(actions) в функцию reducer
    const dispatch = useDispatch();

    // Обработчик ввода текста задания
    const handleChange = (event) => {
        dispatch(inputTaskText(event.target.value));
    }
    // Обаботчик создания нового задания
    const handleSubmit = (event) => {
        event.preventDefault();
        let taskId = Math.random().toString();
        // Создать
        if (taskText.trim()) {
            const modifiedText = taskText.trim();
            dispatch(createTask(taskId, modifiedText, completed, editing));
        }
        // Очистить поле
        document.forms['add_todo_task'].reset();
    }
    return (
        <section className="todo">
            <div className="container">
                <form onSubmit={handleSubmit} className='todo__form' name="add_todo_task">
                    <div className="todo__block">
                        <input
                            type="text"
                            className="todo__input-field"
                            onChange={handleChange}
                            placeholder="What needs to be done? (Type and press 'Enter')" />
                        <input type="submit" hidden />
                    </div>
                </form>
            </div>
        </section>

    );
}

export default TasksForm;
