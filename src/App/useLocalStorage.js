import React from "react"

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

export {useLocalStorage}

/* let defaultToDos = [
  {text: "Cortar Cebolla", completed: true},
  {text: "Llorar con la llorona", completed: false},
  {text: "Abrir Platzi", completed: false},
  {text: "Terminar el curso de React js", completed: false},
  {text: "Cantar una canción", completed: false}
]
localStorage.setItem("TODOS_V1", JSON.stringify(defaultToDos))
 */