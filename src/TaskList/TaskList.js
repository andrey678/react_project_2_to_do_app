import './TaskList.scss';
import { useSelector } from 'react-redux';
import Task from '../Task/Task';
function TaskList() {
    // Все задания
    const tasks = useSelector(state => state.todoTasksReducer.tasksQueue);
    // Выполненные задания
    const completedTasks = useSelector(state => state.todoTasksReducer.tasksQueue.filter(task => task.completed));
    // Невыполненные задания
    const uncompletedTasks = useSelector(state => state.todoTasksReducer.tasksQueue.filter(task => !task.completed));
    // Получить статус filterByStatus из хранилища
    const filterByStatus = useSelector(state => state.todoTasksReducer.statusFilter);

    console.log('completedTasks>>>', completedTasks);
    console.log('uncompletedTasks>>>', uncompletedTasks);
    console.log('tasks-->>>>', tasks);
    console.log('statusFilter-->>>>', filterByStatus);

    const filteredTasks = (status) => {
        switch (status) {

            case 'completed':
                return !!completedTasks.length && completedTasks.map(task => <Task key={task.id} data={task} />);

            case 'uncompleted':
                return !!uncompletedTasks.length && uncompletedTasks.map(task => <Task key={task.id} data={task} />);

            default:
                return tasks.map(task => <Task key={task.id} data={task} />);
        }
    }
    return (
        <section className="tasklist">
            <div className="container">
                <div className="tasklist__wrapper">
                    {filteredTasks(filterByStatus)}
                </div>
            </div>
        </section>
    );
}

export default TaskList;