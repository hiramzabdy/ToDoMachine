import React from "react";
import "./ToDoForm.css"
import { ToDoContext } from "../Context/Context";

function ToDoForm(){
    const {toggleAddTodoWindow, addToDo} = React.useContext(ToDoContext)
    const [newToDo, setNewToDo] = React.useState("")

    const onChange = (event) => {
        setNewToDo(event.target.value)

    }

    const onSubmit = (event) => {
        event.preventDefault()
        toggleAddTodoWindow()
        console.log(newToDo)
        addToDo(newToDo)
    }


    return(
        <form onSubmit={(event) => onSubmit(event)}>
            <label>Write your new To Do</label>
            <textarea placeholder="Cortar cebolla..." value={newToDo} onChange={onChange}></textarea>
            <div className="ToDoForm-ButtonContainer">
                <button className="ToDoForm-Button close-button" onClick={toggleAddTodoWindow}>Cancel</button>
                <button className="ToDoForm-Button add-button" type="submit">Add!</button>
            </div>
        </form>
    )
}

export {ToDoForm}