import './TasksFilter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrashAlt,
    faFlagCheckered,
    faList,
    faListCheck,
    faCrosshairs
} from '@fortawesome/free-solid-svg-icons';
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
        <section className="tasksfilter">
            <div className="container">
                <div className="tasksfilter__wrapper">
                    <div className="tasksfilter__filters-group">
                        <button
                            onClick={handleShowAll}
                            type="button"
                            className="tasksfilter__btn tasksfilter__btn_all-tasks"
                        >
                            <FontAwesomeIcon icon={faList} /> ALL
                        </button>
                        <button
                            onClick={handleShowCompleted}
                            type="button"
                            className="tasksfilter__btn tasksfilter__btn_completed-tasks"
                        >
                            <FontAwesomeIcon icon={faListCheck} /> Completed
                        </button>
                        <button
                            onClick={handleShowUncompleted}
                            type="button"
                            className="tasksfilter__btn tasksfilter__btn_uncompleted-tasks"
                        >
                            <FontAwesomeIcon icon={faCrosshairs} /> Uncompleted
                        </button>
                    </div>
                    <div className="tasksfilter__removers-group">
                        <button
                            onClick={handleDeleteCompleted}
                            className='tasksfilter__delete-btn tasksfilter__delete-btn_completed'
                            type='button'
                        >
                            <FontAwesomeIcon icon={faFlagCheckered} /> Delete completed
                        </button>
                        <button
                            onClick={handleDeleteAll}
                            className='tasksfilter__delete-btn tasksfilter__delete-btn_all'
                            type='button'
                        >
                            <FontAwesomeIcon icon={faTrashAlt} /> DELETE ALL
                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default TasksFilter;