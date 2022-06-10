// Стили
import './App.scss';

// Компоненты
import TaskList from './TaskList/TaskList';
import TasksFilter from './TasksFilter/TasksFilter';
import TasksForm from './TasksForm/TasksForm';

function App() {

  return (
    <div className='app'>
      <div className="app__header-wrapper">
        <h1 className='app__header'>TO DO LIST</h1>
      </div>
      <TasksForm />
      <TasksFilter />
      <TaskList />
    </div>

  );
}

export default App;
