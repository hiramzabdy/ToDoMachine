import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

function App() {
  //States React App
  const {
    item: toDos,
    setItem: setToDos,
    loading,
    error} = useLocalStorage("TODOS_V1", [])
  const [searchValue, setSearchValue] = React.useState("")
  //Used to display number of toDos
  const completedToDos = toDos.filter(todo => !!todo.completed).length
  const totalToDos = toDos.length


  
  //Returns ToDo if it matches searchValue
  const searchedValues = toDos.filter((todo) => {
    //makes text lower case and replaces accented characters
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

  return(
    <AppUI
    completedToDos={completedToDos}
    totalToDos={totalToDos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedValues={searchedValues}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    loading={loading}
    error={error}
    />
  )
}

export default App;