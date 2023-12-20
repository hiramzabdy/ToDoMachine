import "./ToDoSearch.css"

function ToDoSearch(){
    return(
      <input
      placeholder="Task to search..."
      className="ToDoSearch"
      onChange={(event) => {
        console.log(event.target.value)
      }}>
      </input>
    )
}

export { ToDoSearch }