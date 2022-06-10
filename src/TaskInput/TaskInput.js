// Стили
import './TaskInput.scss';
// Иконки FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";

// Хуки React
import { useEffect } from "react";

function TaskInput({ taskInputData, handleChange }) {

    const { id, editing } = taskInputData;

    useEffect(() => {

        //  Увеличение высоты всех редактируемых элементов textarea
        //   в зависимости от количества текста, который уже внутри этих элементов textarea
        let areas = document.getElementsByName('text');

        for (let area of areas) {
            let scHeight = area.scrollHeight;
            area.style.height = `${scHeight}px`;
        }
    });

    return (
        <>
            {editing ?
                <>
                    <input
                        type="text"
                        name="id"
                        value={id}
                        readOnly
                        hidden
                    />
                    <textarea
                        autoFocus
                        onFocus={(event) => event.target.selectionStart = event.target.value.length}
                        name="text"
                        className="task__change-text"
                        defaultValue={taskInputData.taskText}
                        onChange={handleChange}
                        required
                        placeholder="Write your task and 'Save', otherwise 'Delete' it completely"
                    />

                    <button
                        type="submit"
                        className="task__save-changes-btn"
                    >
                        <FontAwesomeIcon icon={faFloppyDisk} /> Save
                    </button>

                </>
                :
                <>
                    <span className="task__new-text">{taskInputData.taskText}</span>
                </>}
        </>
    );
}

export default TaskInput;