import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { ToDoButton } from './ToDoButton';

/* let defaultToDos = [
  {text: "Cortar Cebolla", completed: true},
  {text: "Llorar con la llorona", completed: false},
  {text: "Abrir Platzi", completed: false},
  {text: "Terminar el curso de React js", completed: false},
  {text: "Cantar una canción", completed: false}
]
localStorage.setItem("TODOS_V1", JSON.stringify(defaultToDos))
 */

function useLocalStorage(itemName, initialValue){

  if(!localStorage.getItem(itemName)){
    localStorage.setItem(itemName, JSON.stringify(initialValue))
  }
  let localStorageItems = JSON.parse(localStorage.getItem(itemName))
  const [item, setItem] = React.useState(localStorageItems)

  const saveItems = (newItems) =>{
    localStorage.setItem(itemName, JSON.stringify(newItems))
    setItem(newItems)
  }

  return [item, saveItems]
}

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

  //App main component
  return (
    <>
      <ToDoCounter completed={completedToDos} total={totalToDos}/>
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <ToDoList>
        {searchedValues.map(toDo => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onCompleted={() => completeTodo(toDo.text)}
            onDeleted={() => deleteTodo(toDo.text)}
          />
        ))}
      </ToDoList>

      {<ToDoButton/>}
    </>
  );
}

export default App;