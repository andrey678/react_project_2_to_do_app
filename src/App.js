import './App.scss';
import TaskList from './TaskList/TaskList';
import TasksFilter from './TasksFilter/TasksFilter';
import TasksForm from './TasksForm/TasksForm';

function App() {


  return (
    <div className='app'>
      <h1 className='app__header'>TO DO</h1>
      <TasksForm />
      <TasksFilter />
      <TaskList />
    </div>

  );
}

export default App;
