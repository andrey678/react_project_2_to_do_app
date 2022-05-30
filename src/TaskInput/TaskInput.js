import { editTask } from "../redux/actions";
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from "react";
function TaskInput(props) {
    console.log('task input props', props);
    
    // let [tempValue, setTempValue] = useState('');
    // tempValue = props.data.text;
    // console.log('temp', tempValue);
    const { id } = props.data;
    const tasks = useSelector(state => state.todoTasksReducer.tasksQueue);
    const editingTask = tasks.filter( task => task.id === id)[0].editing;
    console.log(editingTask);
    const dispatch = useDispatch();

    // const editing = <input />;
    // const show = <p></p>;
    // const handleClick = () => dispatch(editTask(id));
    // const handleChange = (event) => setTempValue(event.target.value);
    // useEffect(() => {

    // }, [props.data.editing]);
    return (
        <>

            {props.data.editing ?
                <>
                    <input
                        type="text"
                        name="id"
                        value={id}
                        readOnly
                        hidden
                    />
                    <input
                        // value={tempValue} 
                        // onChange={handleChange}
                        name="text"
                        defaultValue={props.data.taskText}
                        onChange={props.handleChange}
                    />
                    <button
                        type="submit"
                    // onClick={handleClick}
                    >Обновить Task</button>
                </>
                :
                <>
                    {props.data.taskText}
                </>}
        </>
    );
}

export default TaskInput;