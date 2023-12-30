import React from "react"
import { ToDoContext } from "../Context/Context"
// import "./EmptyToDos.css"

function EmptyToDos(){
    const {totalToDos} = React.useContext(ToDoContext)

    if(totalToDos){
        return(
            <p>No To Dos matched the search</p>
        )
    }else{
        return(
            <p>Create your first To Do!</p>
        )
    }
}

export { EmptyToDos }