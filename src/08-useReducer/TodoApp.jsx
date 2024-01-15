import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { ListTodo } from "./components/ListTodo";
import { AddTodo } from "./components/AddTodo";
import { useTodo } from "../hooks";

export const TodoApp = () => {
  const { handleNewTodo, handleDeleteTodo, onToggleTodo, todos, pendingTodos, todosCount } = useTodo();

  return (
    <>
      <h1>
        Todo APP: {todosCount},<small>pendientes: {pendingTodos} </small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {/* Lista de todos */}
          <ListTodo
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* Formulario de todos */}
          <AddTodo onAddTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
