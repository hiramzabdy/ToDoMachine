import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { ToDoButton } from '../ToDoButton';
import { ToDosLoading } from '../ToDosLoading';
import { ToDosError } from '../ToDosError';
import { EmptyToDos } from '../EmptyToDos';
import { ToDoContext } from '../Context/Context';
import { Modal } from '../Modal';
import { ToDoForm } from "../ToDoForm"
import React from 'react';



function AppUI(){

    const {searchedValues, completeTodo, deleteTodo, loading, error, openModal, toggleAddTodoWindow} = React.useContext(ToDoContext)

    return (
        <>
          <ToDoCounter/>
          <ToDoSearch/>
    
          <ToDoContext.Consumer>
            {({
              //Aquí irían las propiedades importadas
              //Sólo dejo esta estructura para futuras consultas
            }) => (
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
            )}
          </ToDoContext.Consumer>

          <ToDoButton
            onClick={toggleAddTodoWindow}
          />
          {openModal && (
            <Modal>
              <ToDoForm/>
            </Modal>
          )}
        </>
      );
}

export { AppUI }