import './TasksFilter.scss';
import { useDispatch } from 'react-redux';
import {
    showCompletedTasks,
    showUncompletedTasks,
    showAllTasks,
    deleteCompletedTasks,
    deleteAllTasks
} from '../redux/actions';

function TasksFilter() {
    
    const dispatch = useDispatch();
    // Показать выполненные задания
    const handleShowCompleted = () => dispatch(showCompletedTasks('completed'));
    // Показать невыполненные задания
    const handleShowUncompleted = () => dispatch(showUncompletedTasks('uncompleted'));
    // Показать все
    const handleShowAll = () => dispatch(showAllTasks('all'));
    // Удалить выполненные задания
    const handleDeleteCompleted = () => dispatch(deleteCompletedTasks());
    // Удалить все задания
    const handleDeleteAll = () => dispatch(deleteAllTasks());

    return (
        <div className="container">

            <div className="tasks-filter">
                <button onClick={handleShowAll} type="button" className="tasks-filter__btn">Все</button>
                <button onClick={handleShowCompleted} type="button" className="tasks-filter__btn">Выполненные</button>
                <button onClick={handleShowUncompleted} type="button" className="tasks-filter__btn">Не выполненные</button>
            </div>
            <div className="tasks-remover">
                <button onClick={handleDeleteCompleted} className='tasks-remover_btn' type='button'>Удалить выполненные задания</button>
                <button onClick={handleDeleteAll} className='tasks-remover_btn' type='button'>Удалить все задания</button>
            </div>
        </div>

    );
}

export default TasksFilter;