import "./ToDoCounter.css"

function ToDoCounter({total, completed}){
    return(
    <>
      <h1 className="toDoCounter">TODOs Hiram</h1>
      <h2 className="toDoCounter">You've completed <span>{completed}</span> of <span>{total}</span> To Do's</h2>
    </>
    )
}

export { ToDoCounter }