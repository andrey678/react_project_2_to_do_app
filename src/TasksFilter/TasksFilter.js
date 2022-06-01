import './TasksFilter.scss';
import { useDispatch } from 'react-redux';
import { showCompletedTasks, showUncompletedTasks, showAllTasks } from '../redux/actions';



function TasksFilter() {
    const dispatch = useDispatch();
    // Показать выполненные задания
    const handleShowCompleted = () => dispatch(showCompletedTasks());
    // Показать невыполненные задания
    const handleShowUncompleted = () => dispatch(showUncompletedTasks());
    // Показать все
    const handleShowAll = () => dispatch(showAllTasks());
    return (
        <div className="container">
            <div className="tasks-filter">
                <button onClick={handleShowAll} type="button" className="tasks-filter__btn">Все</button>
                <button onClick={handleShowCompleted} type="button" className="tasks-filter__btn">Выполненные</button>
                <button onClick={handleShowUncompleted} type="button" className="tasks-filter__btn">Не выполненные</button>
            </div>
        </div>

    );
}

export default TasksFilter;