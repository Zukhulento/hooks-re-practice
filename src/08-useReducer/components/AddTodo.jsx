import { useRef } from "react";

//! Función recibe el onAddTodo que es una función de TodoApp.jsx para agregar todos
export const AddTodo = ({ onAddTodo }) => {
  // Referencia al input para controlar el valor del input
  const todoRef = useRef();
  // Función cuando ocurre el click
  const onNewTodo = (ev) => {
    ev.preventDefault();
    const descValue = todoRef.current.value;
    // Validando que no venga vacío
    if (descValue == "") return;
    // Creando el nuevo todo con los datos nuevos
    const newTodo = {
      id: new Date().getTime(),
      description: descValue,
      done: false,
    };
    // Usando función de TodoApp (Para modificar reducer)
    onAddTodo(newTodo);
    // Limpiando campo
    todoRef.current.value = "";
  };

  return (
    <form>
      <input
        ref={todoRef}
        type="text"
        placeholder="Qué hay que hacer?"
        className="form-control"
      />
      <button
        type="submit"
        onClick={onNewTodo}
        className="btn btn-primary mt-1"
      >
        Submit
      </button>
    </form>
  );
};
