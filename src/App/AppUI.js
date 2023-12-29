import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { ToDoButton } from '../ToDoButton';
import { ToDosLoading } from '../ToDosLoading';
import { ToDosError } from '../ToDosError';
import { EmptyToDos } from '../EmptyToDos';


function AppUI({
    completedToDos,
    totalToDos,
    searchValue,
    setSearchValue,
    searchedValues,
    completeTodo,
    deleteTodo,
    loading,
    error
}){
    return (
        <>
          <ToDoCounter completed={completedToDos} total={totalToDos}/>
          <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
    
          <ToDoList>
            {loading && (
              <>
              <ToDosLoading/>
              <ToDosLoading/>
              <ToDosLoading/>
              </>
            )}
            {error && <ToDosError/>}
            {(!loading && searchedValues.length === 0) && <EmptyToDos/>}
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