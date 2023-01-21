import React from "react";
import { TodoContext } from "../TodoContex";
import { TodoCounter } from "../TodoCounter"
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButtom } from "../CreateTodoButtom";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForms";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmpyTodos } from "../EmpyTodos";



function AppUI() {

  const {error,
    loading,
    searchdTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)

    return(
        <React.Fragment>

    <TodoCounter/>

    <TodoSearch/>

        <TodoList>
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading />}
        {(!loading && !searchdTodos.length) && <EmpyTodos />}
  
        {searchdTodos.map(todo => ( // mostramos los todos unicamente los que estamos buscando en searchTodos
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)} // llamamos la funcion para marcar como completado
          onDelete={() => deleteTodo(todo.text)}// llamamos a la funcion para eliminar un todo
          />
          ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}
     
    <CreateTodoButtom
      setOpenModal={setOpenModal}
    />

   </React.Fragment>
    );
}

export { AppUI };