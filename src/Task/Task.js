import './Task.scss';

function Task(props) {



    return (
        <div className="task">
            <form className='task__form' name="task">
                <div className="task__block">
                    <input
                        type="text"
                        className="task__input-field"
                        value={props.data.text}
                    />
                    <input type="submit" hidden />
                </div>
            </form>
        </div>

    );
}

export default Task;