import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { ToDoButton } from '../ToDoButton';

function AppUI({
    completedToDos,
    totalToDos,
    searchValue,
    setSearchValue,
    searchedValues,
    completeTodo,
    deleteTodo
}){
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

export { AppUI }