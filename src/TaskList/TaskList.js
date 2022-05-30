import { useSelector, useDispatch } from 'react-redux';
import Task from '../Task/Task';
function TaskList(){
    const tasks = useSelector(state => state.todoTasksReducer.tasksQueue);

    return (
        <div className="container">
            {!!tasks.length && tasks.map(task => <Task key={task.id} data={task} />)}
        </div>
    );
}

export default TaskList;