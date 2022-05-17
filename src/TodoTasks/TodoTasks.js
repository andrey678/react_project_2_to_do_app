import { useSelector, useDispatch } from 'react-redux';
import './TodoTasks.scss';

import{ createTask, inputTaskText } from '../redux/actions';


function TodoTasks() {
    const text = useSelector(state => {
        return state.todoTaskReducer.taskText;
    });
    console.log('text >',text);

    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch(inputTaskText(event.target.value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let taskId = Math.random().toString();
        dispatch(createTask(taskId, text ));
    }
    return (
        <div className="todo">
            <div className="container">
                <form onSubmit={handleSubmit} className='todo__form'>
                    <div className="todo__block">
                        <input
                            type="text"
                            className="todo__input-field"
                            onChange={handleChange}
                            placeholder="Что нужно сделать?" />
                            <input type="submit" hidden/>
                        
                    </div>

                </form>
            </div>
        </div>

    );
}

export default TodoTasks;
