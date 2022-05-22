import { useDispatch, useSelector } from "react-redux";

import './Task.scss';
import { updateTask, inputTaskText } from '../redux/actions';


function Task(props) {
    const { id, text } = props.data;
    const modifiedText = useSelector(state => state.todoTasksReducer.taskText);
    console.log(modifiedText);
    const dispatch = useDispatch();


    const handleUpdate = () => {
        dispatch(updateTask(id, modifiedText));
    };

    return (
        <div className="task">
            <form onSubmit={handleUpdate} className='task__form' name="task">
                <div className="task__block">
                    <lable className="task__label">
                        <input type="checkbox" />
                        {text}
                        <button type="button">Редактировать</button>
                        <button type="button">Удалить</button>
                    </lable>

                    <input type="submit" hidden />
                </div>
            </form>
        </div>

    );
}

export default Task;