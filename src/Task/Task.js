import './Task.scss';

import { useDispatch, useSelector } from "react-redux";
import { updateTask, inputTaskText } from '../redux/actions';


function Task(props) {
    const { id, text } = props.data;
    const modifiedText = useSelector(state =>state.todoTasksReducer.taskText);
    console.log(modifiedText);
    const dispatch = useDispatch();


 
    const handleChange = (event) => {
        dispatch(inputTaskText(event.target.value));
    }
    const handleUpdate = (event) => {
        dispatch(updateTask(id, modifiedText));
    };

    return (
        <div className="task">
            <form onSubmit={handleUpdate} className='task__form' name="task">
                <div className="task__block">
                    <lable 
                        className="task__label"
                        onDblClick={handleChange}
                        >
                        <input type="checkbox" />
                        {text}
                    </lable>

                    <input type="submit" hidden />
                </div>
            </form>
        </div>

    );
}

export default Task;