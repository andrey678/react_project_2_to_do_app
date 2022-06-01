import { useSelector, useDispatch } from 'react-redux';
import Task from '../Task/Task';
function TaskList(){
    const tasks = useSelector(state => state.todoTasksReducer.tasksQueue);
    const filteredTasks = useSelector(state => state.todoTasksReducer.filteredTasks);

    return (
        <div className="container">
            {!!filteredTasks.length && tasks.map(task => <Task key={task.id} data={task} />) ||
            !!tasks.length && tasks.map(task => <Task key={task.id} data={task} />)}
        </div>
    );
}

export default TaskList;