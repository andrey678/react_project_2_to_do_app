import './TaskInput.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";

import { editTask } from "../redux/actions";
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from "react";

function TaskInput(props) {
    console.log('task input props', props);

    // let [tempValue, setTempValue] = useState('');
    // tempValue = props.data.text;
    // console.log('temp', tempValue);
    const { id, taskText } = props.data;
    // const tasks = useSelector(state => state.todoTasksReducer.tasksQueue);
    // const editingTask = tasks.filter( task => task.id === id)[0].editing;
    // console.log(editingTask);
    const dispatch = useDispatch();

    // const editing = <input />;
    // const show = <p></p>;
    // const handleClick = () => dispatch(editTask(id));
    // const handleChange = (event) => setTempValue(event.target.value);
    // useEffect(() => {

    // }, [props.data.editing]);
    useEffect(() => {
        console.log('works ok');
        console.log('ELEMENTS', document.getElementsByName('text'));
        //  Увеличение высоты всех редактируемых элементов textarea
        //   в зависимости от количества текста, который уже внутри этих элементов textarea
        let areas = document.getElementsByName('text');
        for (let area of areas){
            
            let scHeight = area.scrollHeight;
            area.style.height = `${scHeight}px`;
        }
        // if(document.forms.task.text){
            
        //     let area = document.forms.task.text;
        //     console.log('works ok', area);
        //     let scHeight = area.scrollHeight;
        //     area.style.height = `${scHeight}px`;
        //     // console.log('works ok', area);
        // }
        
    //     area.onkeyup = (event) => {
    //         area.style.height = "auto";
            // let scHeight = area.scrollHeight;
    //         // console.log(scHeight);
            // area.style.height = `${scHeight}px`;
    //     }
    });
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
                    <textarea
                        // value={tempValue} 
                        // onChange={handleChange}
                        autoFocus
                        onFocus={(event)=> event.target.selectionStart = event.target.value.length}
                        name="text"
                        className="task__change-text"
                        defaultValue={props.data.taskText}
                        onChange={props.handleChange}
                        
                    />
                    
                    <button
                        type="submit"
                        className="task__save-changes-btn"
                    // onClick={handleClick}
                    >
                        <FontAwesomeIcon icon={faFloppyDisk} /> Save
                    </button>
                    
                </>
                :
                <>
                    <span className="task__new-text">{props.data.taskText}</span>
                </>}
        </>
    );
}

export default TaskInput;