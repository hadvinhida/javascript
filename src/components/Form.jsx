function Form (props) {
    return (
<div className="wrapper">
    <header>
        <h3>🔰 TODOLIST </h3><span>{props.tasksCompleted || '0'} /{props.tasks.length}</span>
    </header>

    <form className="input-box">
        <input type="text" ref={props.newtask} placeholder="Add Your Task" />
        <button type="submit" onClick={props.addtask}>Add Task</button>
    </form>
</div>
    )
}

export default Form