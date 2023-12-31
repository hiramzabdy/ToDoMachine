import "./ToDoButton.css"

function ToDoButton(props){
    return(
        <button
        className="toDoButton"
        onClick={props.onClick}
        >+</button>
    )
}

export { ToDoButton }