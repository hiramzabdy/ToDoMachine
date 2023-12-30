import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider({ children }) {
    //States React App
    const {
        item: toDos,
        saveItem: setToDos,
        loading,
        error} = useLocalStorage("TODOS_V1", [])
    const [searchValue, setSearchValue] = React.useState("")

    //Used to display number of toDos
    const completedToDos = toDos.filter(todo => !!todo.completed).length
    const totalToDos = toDos.length
  
    //Returns ToDo if it matches searchValue
    const searchedValues = toDos.filter((todo) => {
        const searchingTextValue = searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        const toDoTextValue = todo.text.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        if(toDoTextValue.includes(searchingTextValue)){
        return todo
        }
    })

    //Checks, Deletes ToDos
    const completeTodo = (idText) => {
        const newToDos = [...toDos]
        newToDos.find(todo => todo.text === idText).completed = !newToDos.find(todo => todo.text === idText).completed
        setToDos(newToDos)
    }
    const deleteTodo = (idText) => {
        const newToDos = [...toDos]
        const todoIndex = newToDos.findIndex(todo => todo.text === idText)
        newToDos.splice(todoIndex,1)
        setToDos(newToDos)
    }


    return (
        <ToDoContext.Provider value={{
            completedToDos,
            totalToDos,
            searchValue,
            setSearchValue,
            searchedValues,
            completeTodo,
            deleteTodo,
            loading,
            error,
        }}>
            {children}
        </ToDoContext.Provider>
    )
}

export { ToDoContext, ToDoProvider }