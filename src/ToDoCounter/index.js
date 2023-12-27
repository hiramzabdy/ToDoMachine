import "./ToDoCounter.css"

function ToDoCounter({total, completed}){
    if(total ===0){
      return(
        <>
          <h1 className="toDoCounter">Hiram's To Dos</h1>
          <h2 className="toDoCounter">Create a new To Do to begin</h2>
        </>
      )
    }else{
      if(completed === total){
        return(
          <>
              <h1 className="toDoCounter">  Hiram's To Dos</h1>
              <h2 className="toDoCounter">Congrats! You've completed all your To Do's!</h2>
          </> 
        )
      }else{
        return(
          <>
            <h1 className="toDoCounter">Hiram's To Dos</h1>
            <h2 className="toDoCounter">You've completed <span>{completed}</span> of <span>{total}</span> To Do's</h2>
          </>
          )
      }
    }
}

export { ToDoCounter }