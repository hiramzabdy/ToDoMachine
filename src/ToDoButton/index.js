import "./ToDoButton.css"

function ToDoButton(){
    return(
        <button
        className="toDoButton"
        onClick={(event) => {
            console.log("You clicked!")
            console.log(event)
            console.log(event.target)
        }}
        >+</button>
    )
}

export { ToDoButton }