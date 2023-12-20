import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { ToDoButton } from './ToDoButton';

let defaultToDos = [
  {text: "Cortar Cebolla", completed: true},
  {text: "Llorar con la llorona", completed: true},
  {text: "Abrir Platzi", completed: false},
  {text: "Terminar el curso de React js", completed: false}
]

function App() {
  return (
    <>

      <ToDoCounter completed={3} total={5}/>
      <ToDoSearch/>

      <ToDoList>
        {defaultToDos.map(task => (
          <ToDoItem
            key={task.text}
            text={task.text}
            completed={task.completed}
          />
        ))}
      </ToDoList>

      {<ToDoButton/>}

    </>
  );
}

export default App;