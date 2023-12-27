import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

function App() {
  //States React App
  const [toDos, setToDos] = useLocalStorage("TODOS_V1", [])
  const [searchValue, setSearchValue] = React.useState("")

  //Used to display number of toDos
  const completedToDos = toDos.filter(todo => !!todo.completed).length
  const totalToDos = toDos.length

  //Returns todo if it matches searchValue
  const searchedValues = toDos.filter((todo) => {
    //makes text lower case and replaces accented characters
    const searchingTextValue = searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const toDoTextValue = todo.text.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    if(toDoTextValue.includes(searchingTextValue)){
      return todo
    }
  })
  //Checks and unchecks toDo as completed
  const completeTodo = (idText) => {
    const newToDos = [...toDos]
    newToDos.find(todo => todo.text === idText).completed = !newToDos.find(todo => todo.text === idText).completed
    setToDos(newToDos)
  }
  //Deletes toDo when X clicked
  const deleteTodo = (idText) => {
    const newToDos = [...toDos]
    const todoIndex = newToDos.findIndex(todo => todo.text === idText)
    newToDos.splice(todoIndex,1)
    setToDos(newToDos)
  }

  return(
    <AppUI

    completedToDos={completedToDos}
    totalToDos={totalToDos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedValues={searchedValues}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    
    />
  )

}

export default App;