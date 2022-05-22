import './App.scss';
import TaskList from './TaskList/TaskList';
import TasksForm from './TasksForm/TasksForm';

function App() {


  return (
    <div className='app'>
      <h1 className='app__header'>TO DO</h1>
      <TasksForm />
      <TaskList />
    </div>

  );
}

export default App;
