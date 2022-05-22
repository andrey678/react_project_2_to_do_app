import { useSelector, useDispatch } from 'react-redux';

import './TasksForm.scss';

import { createTask, inputTaskText } from '../redux/actions';


function TasksForm() {
    // Получение состояния из Redux
    const text = useSelector(state => state.todoTasksReducer.taskText);
    
    // Отправка действий(actions) в функцию reducer
    const dispatch = useDispatch();

    // Обработчик ввода текста
    const handleChange = (event) => {
        dispatch(inputTaskText(event.target.value));
    }
    // Обаботчик отправки формы
    const handleSubmit = (event) => {
        event.preventDefault();
        let taskId = Math.random().toString();
        if (text.trim().length) {
            const modifiedText = text.trim();
            dispatch(createTask(taskId, modifiedText));
        }

        document.forms['add_todo_task'].reset();
    }
    return (
        <div className="todo">
            <div className="container">
                <form onSubmit={handleSubmit} className='todo__form' name="add_todo_task">
                    <div className="todo__block">
                        <input
                            type="text"
                            className="todo__input-field"
                            onChange={handleChange}
                            placeholder="Что нужно сделать?" />
                        <input type="submit" hidden />
                    </div>
                </form>
            </div>
        </div>

    );
}

export default TasksForm;
