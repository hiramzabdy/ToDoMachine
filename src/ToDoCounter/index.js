import { ToDoContext } from "../Context/Context"
import "./ToDoCounter.css"
import React from "react"

function ToDoCounter(){
    const {completedToDos, totalToDos} = React.useContext(ToDoContext)

    if(totalToDos === 0){
      return(
        <>
          <h1 className="toDoCounter">Hiram's To Dos</h1>
          <h2 className="toDoCounter">Create a new To Do to begin</h2>
        </>
      )
    }else{
      if(completedToDos === totalToDos){
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
            <h2 className="toDoCounter">You've completed <span>{completedToDos}</span> of <span>{totalToDos}</span> To Do's</h2>
          </>
          )
      }
    }
}

export { ToDoCounter }